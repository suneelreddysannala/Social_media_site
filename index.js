const express= require('express');

const app=express();
const port=8000;

//use router from the routes

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`error in running the server ${err}`);
    }

    console.log(`successfully running the server on port ${port}`);
}) 