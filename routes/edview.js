const express = require('express');
const router = express.Router();
const EdviewController = require("../controllers/edview");
const {authenticate} = require("../Middlewares/authMiddleware"); // Adjust the path based on where your authenticate middleware is located

router.get('/', authenticate, EdviewController.getAllEdviews);
router.post('/', authenticate, EdviewController.createEdview);
router.patch('/:id', authenticate, EdviewController.updateEdview);
router.delete('/:id', authenticate, EdviewController.deleteEdview);

module.exports = router;
