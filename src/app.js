const express = require ("express");
const routes = require("./routes") ;
const morgan = require("morgan");

const app = express();



app.use(express.json());//garante json
app.use(morgan("dev"));
app.use(routes);

app.listen(3000,()=>console.log("Ok"));


//Arquivo de confiruração