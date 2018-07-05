const taskModel = require('../models/task');

const createNew = params => {
    const newTask = new taskModel({
        title: params.body.title,
        description: params.body.description
    });
    return newTask.save();
}

const getOne = params => {
    return taskModel.findById(params.body.id);
}

const getAll = () => {
    return taskModel.find();
}

const update = params => {
    return taskModel.findOneAndUpdate({
        id: params.body.id
    }, {
        title: params.body.title,
        description: params.body.description
    })
}

const deleteOne = params => {
    return taskModel.findOneAndRemove({
        id: params.body.id
    });
}

module.exports = {
    createNew,
    getOne,
    getAll,
    update,
    deleteOne
}