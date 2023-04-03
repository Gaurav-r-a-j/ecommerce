const express = require('express')
const dotenv = require("dotenv");
const connectDatabase = require('./config/database')

const userRoute  = require("./routes/user")
const authRoute  = require("./routes/auth")
const productRoute  = require("./routes/product")
const cartRoute  = require("./routes/cart")
const orderRoute  = require("./routes/order")

var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json())
//Config
dotenv.config({path:"config/config.env"});

//Connecting to database
connectDatabase();

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);





app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})