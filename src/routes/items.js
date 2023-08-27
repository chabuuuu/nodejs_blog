const express = require('express');
const router = express.Router();
const itemsController = require('../app/controllers/ItemsController');

router.post('/store', itemsController.store);
router.get('/trash', itemsController.trash);
router.put('/:id', itemsController.update);
router.patch('/:id/restore', itemsController.restore);
router.delete('/:id/force-delete', itemsController.forceDelete);
router.delete('/:id', itemsController.delete);
router.get('/create', itemsController.create);
router.get('/:id/edit', itemsController.edit);
router.get('/:slug', itemsController.chiTiet);

module.exports = router;
