const express = require('express')
const mysql = require('mysql2')

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dharan@20',
    database: 'Sqldb',
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
    let sql = "CREATE DATABASE Sqldb";
    db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send("Database Created");
    });
});

//create table
app.get('/officers',(req,res)=>{
    let sql = 'CREATE TABLE officers(id int AUTO_INCREMENT,name VARCHAR(255),designation VARCHAR(255),PRIMARY KEY(id))'
    db.query(sql,err => {
        if(err){
            throw err
        }
            res.send('Officers Table Created!')
    })
})

//Insert employee
app.get('/officers1',(req,res)=>{
    let post = {name: 'Jake',designation:'chief Executive officer'}
    let sql = 'INSERT INTO officers SET ?'
    let query = db.query(sql,post,err=>{
        if(err){
            throw err
        }
            res.send('Officer Added!')
    })
})

//select officer
app.get('/getofficer',(req,res)=>{
    let sql = 'SELECT * from officers'
    let query = db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send('Officers details fetched!')
    })
})
//update employee
app.get('/updateofficer/:id',(req,res)=>{
    let newName = 'updated name'
    let sql = `UPDATE officers SET name = '${newName}' WHERE id = '${req.params.id}'`
    let query = db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send('officer updated!')
    })

})

//delete officer
app.get('/deleteofficer/:id',(req,res)=>{
    let sql = `DELETE FROM officers WHERE id = ${req.params.id}`
    let query = db.query(sql,err =>{
        if(err){
            throw err
        }
        res.send("Officer deleted!")
    })
})
app.listen("3001",(req,res)=>{
    console.log("Server started on port 3001")
})