const express = require("express"); 

const app = express();

const path = require("path");

//morgan
app.use(require("morgan")("combined"));

// dotenvc
require("dotenv").config({path: "./.env"});

// router file
const indexRouter = require("./routes/indexRouter");
const userdb = require("./modeles/database")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.use("/", indexRouter);





app.listen(process.env.PORT, function(req,res){
    console.log(`The server is running on PORT: ${process.env.PORT}`);
})
