'use strict'

var express= require('express');
var bodyParser=require('body-parser');

///Ejecutar funcion express para hacer el llamado
var app=express();

//cargar archivos de Rutas

//Middlewares: una capa que se ejecuta antes de ejecutar la accion de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.get('/test',(req,res)=>{
    res.status(200).send({
        message:"Hola Mundo desde Api de NODEJS"
    })
});
app.post('/test/:id',(req,res)=>{
    //Para recibir la informacion en los metodos post, se utilizan la request para capturar estos dartos
    //para tomar un parametro especifico se utiliza el metodo params o body para tomar el dato de interes
    //EJ: req.body.nombre  req.body.apellido variable
    console.log(req.body.nombre);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        message:"Mensaje utilizando metodo post"
    })
});
app.get('/',(req,res)=>{
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    )
});
//Exportacion 
module.exports=app;