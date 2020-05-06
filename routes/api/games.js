const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

//protect routes and ensure user is logged in to access below routes
router.use(require('../../config/auth'));

/*------ Protected Routes -------*/
//get a list of requestors history - working
router.post('/request', checkAuth, gamesCtrl.requestor);

//get a list of goalie history - working
router.post('/goalie', checkAuth, gamesCtrl.goalie);

//get a list of all active requests available (looks to be ok - further testing needed)
router.get('/open/all', checkAuth, gamesCtrl.all_open)

//get a list of all games (works)
router.get('/all', checkAuth, gamesCtrl.all_games);

// //create a new game (anyone) - Working
router.post('/', checkAuth, gamesCtrl.create);

//edit a game (works)
router.put('/:id', checkAuth, gamesCtrl.update);

//view the details of a game (works)
router.get('/:id', checkAuth, gamesCtrl.show);

//delete a game (works)
router.delete('/:id', checkAuth, gamesCtrl.delete);

//add a goalie to an active request - Seems to be working
router.put('/:id/add_goalie', checkAuth, gamesCtrl.add_goalie);

//requestor of the game to confirm the game after a goalie has joined
router.put('/:id/confirm', checkAuth, gamesCtrl.confirm_game);

//requestor of the game can kick a goalie from a game and change the status from 
//pending to open
router.put('/:id/kick', checkAuth, gamesCtrl.kick_goalie);

module.exports = router;