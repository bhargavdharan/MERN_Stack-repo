const express = require('express');
const app = express();
// const Router = require('router')

// app.get('/', (req, res)=>{
//     res.send("Hello There!");
// })

// const router = Router();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users',require('./routes/API/users'))

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})