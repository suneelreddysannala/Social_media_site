const express= require('express');

const app=express();
const port=8000;

//use router from the routes

app.use('/',require('./routes'));
//setting up the vies engine 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error in running the server ${err}`);
    }

    console.log(`successfully running the server on port ${port}`);
}) 