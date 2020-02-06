

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const app = express();
const PORT = (process.env.PORT || 5000);

app.use(helmet());
app.use(bodyParser.json({type : 'application/*+json'}));

app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const homeRoute = require("./routes/home");
app.use(homeRoute);

const userRoute = require("./routes/user");
app.use(userRoute);



app.listen(PORT, () => {
    console.log("Server started on port : " + PORT);
}); 