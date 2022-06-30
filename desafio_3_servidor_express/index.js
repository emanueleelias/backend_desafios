import fs, { readFileSync } from 'fs';
import express from 'express';

const fileRoute = './files/Productos.txt';
const productos = JSON.parse(readFileSync(fileRoute, 'utf-8'), null, '\t');

//Servidor
const app = express();
const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Escuchando por el puerto ${PORT}`);
})

let visitsItems = 0;
let visitsItem = 0;
const generadorAleatorio = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min;

app.get('/', (req, res) => {
    res.send(`
        <h1>Desafío 3 - Servidor con Express</h1>
        <a href='/items'>Items</a>
        <br>
        <a href='/item-random'>Item</a>`
    );
})

app.get('/items', (req, res) => {
    res.send({items: productos, amount: productos.length});  
    visitsItems++;
})

app.get('/item-random', (req, res) => {
    res.send({item: productos[generadorAleatorio(0, productos.length)]});
    visitsItem++;
})