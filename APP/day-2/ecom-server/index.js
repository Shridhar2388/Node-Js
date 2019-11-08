const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const homeRouter = require('./routes/home');
const logMiddleware = require('./middleware/log');

const app = express();

//custom middleware
app.use(logMiddleware);
// to format
app.use(morgan('tiny'));

// to enable json data receiving from client request
app.use(express.json());

// to enable url encoded data receiving from client request
app.use(express.urlencoded());

app.set('view engine', 'pug');
// app.set('views', `${__dirname}\\views`);

// adding different router
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/', homeRouter);

app.use(express.static('public'));



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Ecom Sever Started. Listening on port ${port}`)
});