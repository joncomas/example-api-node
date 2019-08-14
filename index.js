const express = require('express');
require('dotenv').config()
const routes = require('./routes/');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || '3000';


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use('/api', routes);


app.listen(port, () => {
    console.log('API - http://localhost:', port);
});
