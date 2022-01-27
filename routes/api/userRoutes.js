const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);
module.exports = router;