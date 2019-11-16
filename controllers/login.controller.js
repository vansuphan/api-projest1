const md5 = require('md5');
const Users = require('../models/user.model');

module.exports.login = function (req, res, next) {
    res.send('Login...');
}

module.exports.postlogin = async function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    res.locals.message = {
        suscess: true,
        messages : ""
    }
    //console.log( username, password);
    var user = await Users.findOne({
        username: username
    }, function (err) {
        if (err) {
            return err;
        }
    });
    //console.log(user);
    if (!user) {
        res.locals.message.suscess = false;
        res.locals.message.messages = "sai thong tin";
        res.status(400).send(res.locals.message);
        return;
    }
    if (user.password !== md5(password)) {
        res.locals.message.suscess = false;
        res.locals.message.messages = "sai thong tin";
        res.status(400).send(res.locals.message);
        return;
    }
    res.locals.message.suscess = true;
    res.status(200).send(res.locals.message);
};