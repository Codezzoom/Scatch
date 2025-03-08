const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');

const connectedWithMongoDB = require('./config/connection');
const ownerRouter = require('./routes/owner')
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const app = express();
const port = 8080;

// JSON AND FORM DATA PARSE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS SET-UP
app.set("view engine", "ejs");
app.set("ejs", path.resolve('/views'));
app.use(express.static('public'));

// COOKIE PARSER
app.use(cookieParser());

// START CONNECTION
connectedWithMongoDB('mongodb://127.0.0.1:27017/Scatch')
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err));

// ROUTES
app.use('/owner', ownerRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Opening on port: ${port}`);
})

