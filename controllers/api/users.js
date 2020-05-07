const User = require('../../models/User');
const jwt = require('jsonwebtoken');

//SECRET string for JWT
const SECRET = process.env.SECRET;

module.exports = {
    index,
    show,
    create,
    update,
    delete: delete_user,
    login
};

//send all users as json response
function index(req, res) {
    User.find({},(err, users) => {
        if (err) {
            console.log("index error: " + err);
            res.sendStatus(500);
        }
        res.json(users);
    });
};

//get one User
function show(req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            console.log('error: ' + err);
            res.sendStatus(500);
        }
        res.json(user);
    });
};

// create a new user
async function create(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);
    }
}

//update a user
function update(req, res) {
    User.findById(req.user._id, function(err, user) {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        if (req.user._id != user._id) {
            return res.json({response: 'You do not have access to edit this user'})
        }
        User.findByIdAndUpdate(user, req.body.user, {new: true}, (err, user) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            res.json(user);
        });
    })
};

//delete a user
function delete_user(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        if (req.user.id != user._id) {
            res.json({response: 'You do not have access to delete this user'})
        }
        User.findByIdAndDelete(user, (err, user) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            res.json(user);
        });
    });
};

async function login(req, res) {
    try {
        console.log(req.body.email)
        const user = await User.findOne({"email": req.body.email});
        if (!user) return res.status(401).json({err: 'user not found'});
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({token});
            } else {
                return res.status(401).json({err: 'wrong password'});
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}

//create JSON web token
function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}
