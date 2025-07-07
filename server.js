const express = require('express');
const connect = require('./config/db');
const {PORT} = require('./utils/config');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');
const app = express();
app.use(express.json());



app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/carts',cartRouter);
app.use('/orders',orderRouter);

const server = async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
}
server()