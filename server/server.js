

require('./config/config')

const express=require('express');
const mongoose=require('mongoose');



const app=express();

app.use(require('./routes/usuario')); 

mongoose.connect(process.env.urlDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:false},(err,res)=>{
    
    if (err) throw err;
    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT,()=>{
    console.log('escuchando en el puerto ',process.env.PORT);
})