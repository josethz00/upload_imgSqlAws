const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(require('./routes'));

app.use((req, res, next)=>{
    const error = new Error('Page not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({error: error.message})
})

app.listen(3000, ()=>console.log('server is running.....'));