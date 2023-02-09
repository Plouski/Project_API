const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
require('dotenv').config();
const apiRouter = require('./routes');
app.use(bodyParser.json());

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xcgfpj7.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
    console.log("successfully connect to database")
}).catch(err=>console.log(err.message));

app.use('/api/v1', apiRouter);
// app.use(errorHandler);

//Lire les users par ID
app.get('/user/:id', (req,res)=>{
    User.findById(req.params.id)
    .then((data)=>{
        res.send(data);
    })
});

//methode launch app
app.listen(3000, function () {
    console.log("Lancement du serveur");
})