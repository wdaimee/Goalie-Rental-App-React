const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/api/users');

//get all users
router.get('/', userCtrl.index);
//create a user
router.post('/', userCtrl.create);
//login a user
router.post('/login', userCtrl.login);

//protect routes and ensure user is logged in to access below routes
router.use(require('../../config/auth'));

//update a user
router.put('/:id', userCtrl.update);
//show a specific user
router.get('/:id', userCtrl.show);
//delete a user
router.delete('/:id', userCtrl.delete);


module.exports = router;