const express = require('express');
const router = express.Router();
const itemsController = require('../app/controllers/ItemsController');

router.get('/:slug', itemsController.chiTiet);

module.exports = router;
