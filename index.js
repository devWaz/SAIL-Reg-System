const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

dotenv.config({path: "config.env"})
let PORT = process.env.PORT || 4040

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine' , 'ejs')


app.use("/css" , express.static(path.resolve(__dirname, "assests/css/style.css")))
app.use("/img" , express.static(path.resolve(__dirname, "assests/img")))
app.use("/js" , express.static(path.resolve(__dirname, "assests/js")))



app.get("/" , ((req , res) => {
    res.render('index')
}));

app.listen(PORT , () => {
    console.log(`Server started at port ${PORT}`);
});