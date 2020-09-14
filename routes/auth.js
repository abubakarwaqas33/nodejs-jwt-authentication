const router = require('express').Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation/validation');


router.post('/register', (req, res) => {

    const { error } = registerValidation(req.body);

    if (error)
        return res.status(400).send('validatation error');


    const salt = bcrypt.genSaltSync(20);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const user = new User({

        name: req.body.name,
        password: hashPassword,
        email: req.body.email,
    });

    user.save().then(result => {

        if (result)
            return res.json(result);

    }).catch(err => {
        console.log(err)
        return res.json({ message: "Email already registeres OR Somethig wrong" })
    })




});

router.post('/login', (req, res) => {

    const { error } = loginValidation(req.body);

    if (error)
        return res.status(400).send('validatation error');

    User.findOne({ email: req.body.email }, (err, user) => {


        if (!user) return res.status(500).send({ message: "Email doesn't exist" });

        bcrypt.compare(req.body.password, user.password).then(function(validPassword) {

            if (!validPassword) return res.send({ message: "Password does not match" });
            var token = jwt.sign({ _id: user.id }, process.env.SECRET_KEY);
            
            return res.header('auth-token',token).send(token);
           // return res.send(token)

        });

    })//Login Form logic end here 


});



module.exports = router;