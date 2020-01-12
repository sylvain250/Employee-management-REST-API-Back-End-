// this file is for spinning the express

import mongoose from 'mongoose';
import express from 'express';
import employeeRoutes from './routes/employee';
import errorHandler from './middleware/errorhandler'

const app = express();
import bodyParser from 'body-parser';
mongoose.connect('mongodb://localhost/Challenge#3')
.then(()=>console.log('connected to mongoDB...'))
.catch(err => console.error('Could not connect to mongoDB', err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', employeeRoutes);
app.use(errorHandler);
export default app;
