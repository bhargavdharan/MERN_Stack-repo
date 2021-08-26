const express = require('express')
const mysql = require('mysql2')

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    insecureAuth : true
});

// Connect to MySQL
db.connect( (err) => {
    if (err){
        throw err
    }else{
        console.log('MySQL Connected')
    }
});

const app = express();

// Create database
app.get('/createdb',(req, res)=>{
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err)=>{
        if(err){
            throw err
        }
        res.send("Database Created");
    });
});

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})