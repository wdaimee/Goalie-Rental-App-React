const Game = require('../../models/Game');
const Arena = require('../../models/Arena');

module.exports = {
    create,
    requestor,
    goalie, 
    all_games,
    add_goalie,
    confirm_game,
    all_open,
    show,
    update,
    delete: delete_game,
    kick_goalie
};

//send a list of games for a user by following sort: all, open, pending, confirmed - works
function requestor(req, res) {
    if(req.body.status === 'all') {
        Game.find({requestor: req.body.user})
        .populate('requestor')
        .populate('arena')
        .populate('goalie')
        .exec((err, games) => {
            console.log(games);
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
        }
            res.json(games);
        });
    } else {
        Game.find({requestor: req.body.user, status: req.body.status})
        .populate('requestor')
        .populate('arena')
        .populate('goalie')
        .exec((err, games) => {
            console.log(games);
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            res.json(games);
        });
    }
};

//send a list of games a goalie has played - query for all, pending, confirmed - works
function goalie(req, res) {
    if(req.body.status === 'all') {
        Game.find({goalie: req.body.user})
        .populate('requestor')
        .populate('arena')
        .populate('goalie')
        .exec((err, games) => {
            console.log(games);
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
        }
            res.json(games);
        });
    } else {
        Game.find({goalie: req.body.user, status: req.body.status})
        .populate('requestor')
        .populate('arena')
        .populate('goalie')
        .exec((err, games) => {
            console.log(games);
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            res.json(games);
        });
    }
};

//function to view all open games available - works
function all_open(req, res) {
    console.log(req.user)
    Game.find({status: 'open', request_date: {$gt: new Date()}, sport: {$in: req.user.sport}, "skill_level.value": {$lte: req.user.skill_level.value}})
    .populate('arena')
    .populate('goalie')
    .populate('requestor')
    .exec((err, games) => {
        console.log(games);
        if (err) {
            console.log("index error: " + err);
            res.sendStatus(500);
        }
        res.json(games);
    });
};

//function to add a goalie to the game - Works!
function add_goalie(req, res) {
    if (req.body.user.goalie === false ) {
        return res.json({response: 'You\'re not a goalie'});
    }
    Game.findById(req.body.game, function(err, game) {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        if (req.body.user.sport.includes(game.sport) === false) {
            // return res.json({response: 'You don\'t play this sport'});
            return res.status(400).send(new Error('You don\'t play this sport'))
        }
        if (req.body.user.skill_level.value < game.skill_level.value) {
            // return res.json({response: 'You are not at the same skill level that this game requires'});
            return res.status(400).send(new Error('You are not at the same skill level that this game requires'))
        }
        game.goalie = req.body.user;
        game.status = 'pending';
        game.save((err, game) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            Game.findOne(game)
            .populate('arena')
            .populate('requestor')
            .populate('goalie')
            .exec((err, game) => {
                if (err) {
                    console.log("error: " + err);
                    res.sendStatus(500);
                }
                res.json(game);
            });
        });
    });
};

//function for user to confirm a goalie for their game, change status from pending to confirmed
function confirm_game(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log('err:' + err);
            res.sendStatus(500);
        }
        game.status = 'confirmed';
        game.save((err, game) => {
            if (err) {
                console.log('err:' + err);
                res.sendStatus(500);
            }
            Game.findOne(game)
            .populate('arena')
            .populate('requestor')
            .populate('goalie')
            .exec((err, game) => {
                if (err) {
                    console.log("error: " + err);
                    res.sendStatus(500);
                }
                res.json(game);
            });
        });
    });
};

//send list of all games (completed)
function all_games(req, res) {
    Game.find({})
    .populate('arena')
    .populate('goalie')
    .populate('requestor')
    .exec((err, games) => {
        if (err) {
            console.log("index error: " + err);
            res.sendStatus(500);
        }
        res.json(games);
    });
};

//get one game (completed)
function show(req, res) {
    Game.findById(req.params.id)
    .populate('arena')
    .populate('goalie')
    .populate('requestor')
    .exec((err, game) => {
        if (err) {
            console.log('error: ' + err);
            res.sendStatus(500);
        }
        res.json(game);
    });
};

//create a new game (completed) - Working!
function create(req, res) {
    const new_game = new Game({
        sport: req.body.sport,
        skill_level: req.body.skill_level,
        city: req.body.city,
        request_time: req.body.request_time,
        request_date: req.body.request_date,
        team_name: req.body.team_name,
        description: req.body.description
    });
    Arena.findOne({name: req.body.arena}, (err, arena) => {
        new_game.arena = arena._id;
        new_game.save((err, game) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            Game.findOne(game)
            .populate('arena')
            .populate('goalie')
            .populate('requestor')
            .exec((err, game) => {
                if (err) {
                    console.log("error: " + err);
                    res.sendStatus(500);
                }
                res.json(game);
            });
        });
    });
    new_game.requestor = req.body.requestor;
    console.log(new_game);
};

//update a game (completed)
function update(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log("error:" + err);
        }
        if (!req.body.arena._id) {
            Arena.findOne({name: req.body.arena}, (err, arena) => {
                game.arena = arena._id;
                game.save((err, game) => {
                    if (err) {
                        console.log("error: " + err);
                        res.sendStatus(500);
                    }
                    Game.findOne(game)
                    .populate('arena')
                    .populate('goalie')
                    .populate('requestor')
                    .exec((err, game) => {
                        if (err) {
                            console.log("error: " + err);
                            res.sendStatus(500);
                        }
                    });
                });
            });
        } 
        Game.findByIdAndUpdate(req.params.id, req.body.game, {new: true})
        .exec((err, game) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            console.log(game);
            Game.find(game)
            .populate('arena')
            .populate('goalie')
            .populate('requestor')
            .exec((err, game) => {
                console.log(game);
                if (err) {
                    console.log('error: ' + err);
                    res.sendStatus(500);
                }
                res.json(game);
            });
        });
    });
};

//delete a game (completed)
function delete_game(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log("error: " + err);
            res.sendStatus(500);
        }
        Game.findByIdAndDelete(game)
        .populate('arena')
        .populate('goalie')
        .populate('requestor')
        .exec((err, game) => {
            if (err) {
                console.log("error: " + err);
                res.sendStatus(500);
            }
            res.json(game);
        });
    });
};

//function to kick a goalie from a game and change status from pending to open
function kick_goalie(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            console.log('err:' + err);
            res.sendStatus(500);
        }
        game.goalie = undefined;
        game.status = 'open';
        game.save((err, game) => {
            if (err) {
                console.log('err:' + err);
                res.sendStatus(500);
            }
            Game.findOne(game)
            .populate('arena')
            .populate('requestor')
            .populate('goalie')
            .exec((err, game) => {
                if (err) {
                    console.log("error: " + err);
                    res.sendStatus(500);
                }
                res.json(game);
            });
        });
    });
};
