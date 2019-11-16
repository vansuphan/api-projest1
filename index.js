require('dotenv').config(); 
const express = require('express');
const app  = express();
const port = 1111 || process.env.PORT;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).
    catch(error => handleError(error));

var loginRoute = require('./routes/login.route');
app.use(express.json());
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend : true}));
var User = require('./models/user.model');
app.get('/user',(req,res)=>{
    User.find().then(function(user){
        res.json(user);
    });
});
app.get('/', (req,res)=>{
    res.send('Hello there');
});
app.use('/login', loginRoute);
app.listen(port,()=> console.log('server on port 1111'));