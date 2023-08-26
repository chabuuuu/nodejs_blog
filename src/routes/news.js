const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:id', newsController.chiTiet);
router.get('/', newsController.index);

module.exports = router;
