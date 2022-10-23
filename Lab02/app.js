const express = require("express");
const app = express();
const router = require("./router")
const port = 5000;
var bodyParser=require("body-parser");
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({extended:true}));

app.use(router);


app.listen(port, ()=>{
    console.log(`This app is listening to ${port}`);
})