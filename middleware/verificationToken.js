var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) return res.status(401).send('Access Denied');

   jwt.verify(token, process.env.SECRET_KEY,(error,verified)=>{

    if(error) return res.status(403).send('Authentication Failed');

    req.user=verified;

    next();

   });
    


}