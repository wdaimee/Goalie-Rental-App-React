const Arena = require('../../models/Arena');

module.exports = {
    index,
    show,
    create,
    update,
    delete: delete_arena,
    areansByCity
};

//send all arenas as json response
function index(req, res) {
    Arena.find({},(err, arenas) => {
        if (err) {
            console.log("index error: " + err);
            res.sendStatus(500);
        }
        res.json(arenas);server.js
    });
};

//get one arena
function show(req, res) {
    Arena.findById(req.params.id, (err, arena) => {
        if (err) {
            console.log('error: ' + err);
            res.sendStatus(500);
        }
        res.json(arena);
    });
};

//get a list of areans by city
function areansByCity(req, res) {
    console.log(req.body)
    Arena.find({city: req.body.city}, (err, arenas) => {
        if (err) {
            console.log('error: ' + err);
            res.sendStatus(500);
        }
        res.json(arenas);
    });
}

// create a new arena
function create(req, res) {
    Arena.create(req.body, function(err, arena) {
        if(err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        res.json(arena);
    });
}

//update an arena
function update(req, res) {
    Arena.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, arena) => {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        res.json(arena);
    });
};

//delete an arena
function delete_arena(req, res) {
    Arena.findOneAndDelete(req.params.id, (err, arena) => {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        res.json(arena);
    });
};