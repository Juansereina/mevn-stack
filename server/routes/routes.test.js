const axios = require('axios');
const url = process.env.HOST_URL;
const routesMessages = require('./routesMessages');

describe('Task routes', () => {
    it('Create new Task', async () => {
        const response = await axios({
            method: 'post',
            url: `${url}/task/new`,
            data: {
                title: 'Prueba',
                description: 'Soy la descripción'
            }
        });
        expect(response.data.message).toBe(routesMessages.taskCreated);
    })
})