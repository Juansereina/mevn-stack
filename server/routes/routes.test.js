const axios = require('axios');
const url = process.env.HOST_URL;
const routesMessages = require('./routesMessages');

describe('Task routes', () =>{
    it('Create new Task', async () => {
        const response = await axios.get(`${url}/task/new`);    
        expect(response.data).toBe(routesMessages.taskCreated);
    })
})