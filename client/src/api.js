const axios = require('axios');
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
const getAllTask = () => {
    try {
        const response = axios({
            method: 'get',
            url: `${url}/task/`
        });
        return response;
    } catch (err) {
        return err;
    }
}

const saveTask = (data) => {
    try {
        const response = axios({
            method: 'post',
            url: `${url}/task/new`,
            data
        });
        return response;
    } catch (err) {
        return err;
    }
}

const removeTask = (id) => {
    try {
        const response = axios({
            method: 'delete',
            url: `${url}/task/${id}`,
        });
        return response;
    } catch (err) {
        return err;
    }
}

const updateTask = ({
    _id,
    ...props
}) => {
    try {
        const response = axios({
            method: 'put',
            url: `${url}/task/${_id}`,
            data: {
                ...props
            }
        });
        return response;
    } catch (err) {
        return err;
    }
}

export default {
    getAllTask,
    saveTask,
    removeTask,
    updateTask
}