const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const userroutes = require("./server/routes/routes")
const connectDB = require("./server/db/connection")

dotenv.config({path: "config.env"})
let PORT = process.env.PORT || 4040

connectDB()

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine' , 'ejs')


app.use("/css" , express.static(path.resolve(__dirname, "assests/css/style.css")))
app.use("/img" , express.static(path.resolve(__dirname, "assests/img")))
app.use("/js" , express.static(path.resolve(__dirname, "assests/js")))


app.use(userroutes)

app.listen(PORT , () => {
    console.log(`Server started at port ${PORT}`);
});