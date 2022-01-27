const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts);

router.route('/:userId').post(createThought);
router
    .route('/reaction/:thoughtId').put(addReaction).delete(removeReaction);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;