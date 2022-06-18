require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/',(req,res)=>{
res.send({
    message:"Root Sucess"
})
})
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
