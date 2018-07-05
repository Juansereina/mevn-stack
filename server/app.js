require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');
const taskRoutes = require('./routes/task.routes');
var cors = require('cors')

const start = () => {
    app.use(
        process.env.NODE_ENV === "test" ?
        cors('*') : cors(`${process.env.HOST_URL}`)
    )
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json())
    app.use('/task', taskRoutes);
    app.listen(process.env.PORT);
    return config
}

module.exports = start;