const express = require('express');
const router = express.Router();
const routesMessages = require('./routesMessages');

router.get('/new', (req, res) => {
    res.send(routesMessages.taskCreated);
})

module.exports = router;