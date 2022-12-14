const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const res = require('express/lib/response');

const app = express();

app.use(bodyParser.json());

app.get('/',(req, res) =>{
    res.json({
        'sucess' : true
    });
});


app.use('/api', api);

const PORT = process.env.PORT;  
app.listen(PORT);