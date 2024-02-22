

const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoutes');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

//access to env variable
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT

// database connection 
mongoose.connect(process.env.DATABASE)
    .then((con) => {
        // console.log(con.connection);
        console.log("database connected");
    }).catch(e => {
        console.log("database not connected");

    })

// using cookie parser to get the access in node app
app.use(cookieParser())

// to know what the request parameter
app.use(morgan("dev"))


// defining routes
app.get('/api/v1/users', userRouter)


// starting the server
app.listen(PORT, () => {
    console.log("app stated running at port ", PORT);
})


















