const express = require('express');
const router = express.Router();
const arenaCtrl = require('../../controllers/api/arenas');


function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

//protect routes and ensure user is logged in to access below routes
router.use(require('../../config/auth'));

/*------ Protected Routes -------*/
//get all arenas
router.get('/', checkAuth, arenaCtrl.index);

//create an arena
router.post('/', checkAuth, arenaCtrl.create);

//get a list of arenas by city
router.post('/city', checkAuth, arenaCtrl.areansByCity);

//get single arena
router.get('/:id', checkAuth, arenaCtrl.show);

//delete an arena
router.delete('/:id', checkAuth, arenaCtrl.delete);

//edit an arena
router.put('/:id', checkAuth, arenaCtrl.update);

module.exports = router;