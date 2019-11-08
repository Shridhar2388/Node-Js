const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');

const logMiddleware = require('./middleware/log');
const authMiddleware = require('./middleware/auth');
const adminMiddleware = require('./middleware/admin');

const app = express();

//custom middleware
app.use(logMiddleware);
// app.use(authMiddleware);
// app.use(adminMiddleware);

// to format
app.use(morgan('tiny'));

// to enable json data receiving from client request
app.use(express.json());

// to enable url encoded data receiving from client request
app.use(express.urlencoded());

app.set('view engine', 'pug');
// app.set('views', `${__dirname}\\views`);

// adding different router
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/', homeRouter);


app.use(express.static('public'));

//Mongo db connection establishment

mongoose.connect(
    'mongodb://localhost:27017/product-db', { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Database connection successfull');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Ecom Sever Started. Listening on port ${port}`)
    });
}).catch((error) => {
    console.log('Error:', error);
});