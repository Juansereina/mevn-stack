const express = require('express');
const router = express.Router();
const routesMessages = require('./routesMessages');
const taksService = require('../service/task.service');

router.get('', async(req, res) =>{
    const result = await taksService.getAll();
    res.send({result, message: routesMessages.tasksFound});
});

router.get('/:id', async(req, res) =>{
    const result = await taksService.getOne(req);
    res.send({result, message: routesMessages.taskFound});
});

router.post('/new', async(req, res) => {
    const result = await taksService.createNew(req);
    res.send({result, message: routesMessages.taskCreated});
});

router.put('/:id', async(req, res) => {
    const result = await taksService.update(req);
    res.send({result, message: routesMessages.taskUpdated});
});

router.delete('/:id', async(req, res) => {
    const result = await taksService.deleteOne(req);
    res.send({result, message: routesMessages.taskDeleted});
});

module.exports = router;