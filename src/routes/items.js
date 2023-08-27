const express = require('express');
const router = express.Router();
const itemsController = require('../app/controllers/ItemsController');

router.post('/store', itemsController.store);
router.get('/create', itemsController.create);
router.get('/:slug', itemsController.chiTiet);

module.exports = router;
