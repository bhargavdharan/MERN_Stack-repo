const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//Mysql
const pool = mysql.createPool({
    connectionLimit:10,
    port : 3306,
    host           : 'localhost',
    user           : 'root',
    password       : 'Dharan@20',
    database       : 'nodejs_beers'
})

// Get all beers
app.get('', (req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log(`connected as id ${connection.threadId}`)

        // query(sqlString,callback)
        connection.query('SELECT * from beers',(err,rows)=>{
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })
})



//Listen on environment port or 5000
app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})