const express = require('express');
const router = express.Router();
const routesMessages = require('./routesMessages');
const taksService = require('../service/task.service');

router.post('/new', async(req, res) => {
    const result = await taksService.createNew(req);
    res.send({result, message: routesMessages.taskCreated});
})

module.exports = router;