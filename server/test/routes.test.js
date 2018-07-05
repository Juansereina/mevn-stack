const axios = require('axios');
const url = process.env.HOST_URL;
const routesMessages = require('../routes/routesMessages');
const change = require('chance');

describe('Task routes', () => {
    it('Create new Task', async () => {
        const response = await axios({
            method: 'post',
            url: `${url}/task/new`,
            data: {
                title: chance.word(),
                description: chance.sentence()
            }
        });
        expect(response.data.message).toBe(routesMessages.taskCreated);
    })
    
    it('Find all the Tasks', async () => {
        const response = await axios({
            method: 'get',
            url: `${url}/task/`
        });
        expect(response.data.message).toBe(routesMessages.tasksFound);
    })

    it('Find one Task', async () => {
        const createTask = await axios({
            method: 'post',
            url: `${url}/task/new`,
            data: {
                title: chance.word(),
                description: chance.sentence()
            }
        });
        const response = await axios({
            method: 'get',
            url: `${url}/task/${createTask.data.result._id}`
        });
        expect(response.data.message).toBe(routesMessages.taskFound);
    })

    it('Update one Task', async () => {
        const createTask = await axios({
            method: 'post',
            url: `${url}/task/new`,
            data: {
                title: chance.word(),
                description: chance.sentence()
            }
        });
        const response = await axios({
            method: 'put',
            url: `${url}/task/${createTask.data.result._id}`,
            data: {
                title: chance.word(),
                description: chance.sentence()
            }
        });
        expect(response.data.message).toBe(routesMessages.taskUpdated);
    })
    it('Delete one Task', async () => {
        const createTask = await axios({
            method: 'post',
            url: `${url}/task/new`,
            data: {
                title: chance.word(),
                description: chance.sentence()
            }
        });
        const response = await axios({
            method: 'delete',
            url: `${url}/task/${createTask.data.result._id}`,
        });
        expect(response.data.message).toBe(routesMessages.taskDeleted);
    })


})