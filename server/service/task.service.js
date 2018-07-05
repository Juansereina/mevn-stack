const taskModel = require('../models/task');

const createNew = req => {
    const newTask = new taskModel({
        title: req.body.title,
        description: req.body.description
    });
    return newTask
}

module.exports = {
    createNew
}