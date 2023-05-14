const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');


// Create a new user
router.post('/create', userController.createUser);
// Get all users
router.get('/all', userController.getAllUsers);
// Get a single user
router.get('/:id', userController.getSingleUser);
// Delete a single user
router.delete('/del', userController.deleteUser);
// Change password
router.put('/change-password', userController.changePassword);
// // Change email
router.put('/change-email', userController.changeEmail);
// // Sign in
router.post('/signIn', userController.signIn);
// router.post('/send-notification', userController.sendNotification);
// // keep signed in
// router.post('/keep-signed-in', userController.keepSignedIn);
// // change theme
// router.put('/changeTheme', userController.updateTheme);


module.exports = router;