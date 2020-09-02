const express = require('express');
const router = require('./routes');
const path = require('path');
const {logger, internalServerError, notFoundHandler} = require('./middlewares');

//Initialization APPs
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(logger);
app.use('*/css', express.static(path.join(__dirname, 'public/css')))
app.use(router);

app.get('/ErrorYeah', (req, res)=> {
    yeahError //Error yeah
})

//500 Internal Server Error
app.use(internalServerError);

//400 Bad Request Error 
app.use(notFoundHandler);


//Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});