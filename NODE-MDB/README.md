# What is MongoDB?

### * MongoDB is a cross-platform,document-oriented database that provides,high performance,high availability and easy scalability.

### * MongoDB works on concept of collection and document

### * It is a NoSQL database and it is written in C++.

### * To be able to use MongoDB,download the free MongoDB database from the official website.




# Why connect Node.js with MongoDB?

### * All the modern applications require big data,fast features development, flexible deployment.

### * The older database systems can have issues competing with modern scalability needs.

### * MongoDB was needed to address both challenges

### * The prime purpose of building MongoDB is:
####                           ----       **Scalability**
####                           ----       **Performance**
####                           ----       **High-Availability**
####                           ----       **Scaling from single server deployments to large,complex multi-site architectures**
####                           ----       **Easily deploy,operate,and scale the databases across the leading cloud platforms like Microsoft Azure,AWA,etc.**

### * it is used in large implementation areas like:
####    ---- Big Data
####    ---- content Management and Delivery
####    ---- Mobile and social infrastructure
####    ---- user Data Management
####    ---- data hub

### * To Create a database in MongoDB:
####    ---- start by creating a MongoClient object
####    ---- then specify a connection URL with correct ip address and the name of the database you want to create

```
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database Connected!");
    db.close();
})
```



# MERN stack

### * MERN stack is a javascript stack that is used for building modern single-page applications
### * MERN stack comprises of 4 technologies namely: MongoDB,Express,React and Node.js. it is designed to make the development process smoother and easier.
## The phrase 'MERN stack' refers to the following technologies:

### --- MongoDB    || it is a cross-platform document-oriented database program.
### --- Express.js || it is web application framework for node.js
### --- React      || React is a javascript library building user interfaces.
### --- Node.js    || Node.js is an open-source,cross-platform javascript run-time environment that executes javascript code outside of a browser.





















