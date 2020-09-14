const express= require('express');
const app= express();
const auth=require('./routes/auth');
const PORT= process.env.PORT|| 4000;

const verificationToken=require('./middleware/verificationToken');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/user/',auth);


app.get('/',(req, res)=>{

    res.send('WELCOME TO HOME PAGE')
})


app.get('/home',verificationToken,(req, res)=>{

    res.send('Home Page open')
})

app.listen(PORT,()=>{
    console.log('Local connection established')
})