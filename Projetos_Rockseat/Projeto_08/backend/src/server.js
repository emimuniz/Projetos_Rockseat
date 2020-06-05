const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')
const server = express();

mongoose.connect('mongodb+srv://emimmuniz:91541300@cluster0-1xtar.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

server.use(express.json());
server.use(routes);
server.listen(3333);
