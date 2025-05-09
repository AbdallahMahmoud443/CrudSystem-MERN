// Title: 1-Create API For Crud Operations
// hint: Old Syntax of importing modules 
// const express = require('express');
// hint: new Syntax of importing modules
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from './routes/product.route.js';
dotenv.config();

const app = express(); // description: Creates an Express application

app.use(express.json()) //hint: middleware => allow to accept json data from res.body  

app.use('/api/products', productRouter) // defined Product Route 

/**
 * param
 * @param {number} PortNumber
 * @param {callback} StartPointCallback
 * @return {node http.Server}
 */
app.listen(5000, () => {
    console.log('Server Started at http://localhost:5000');
    connectDB();
}); // description:creates an http server and listens on it
