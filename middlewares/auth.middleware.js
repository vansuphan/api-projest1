const jwt = require('jsonwebtoken');
module.exports.auth = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send('Access Denied');
        return;
    }
    const result = jwt.verify(token,process.env.TOKEN_SECRET);
    if(result == false){
        res.status(401).send('Access Denied');
        return;
    }
    res.status(400).send('Invalid Token');
    next();
}