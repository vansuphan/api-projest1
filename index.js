require('dotenv').config(); 
const express = require('express');
const app  = express();
const port =  process.env.PORT || 1111;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).
    catch(error => handleError(error));

let loginRoute = require('./routes/login.route');
let productRoute = require('./routes/product.route');
let authLogin = require('./middlewares/auth.middleware');

app.use(express.json());
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend : true}));

// let User = require('./models/user.model');
// app.get('/user',(req,res)=>{
//     User.find().then(function(user){
//         res.json(user);
//     });
// });

app.get('/', (req,res)=>{
    res.send('Hello there');
});
app.use('/login', loginRoute);
app.use('/product', authLogin.auth, productRoute);
app.listen(port,()=> console.log('server on'));