var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/myDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var DB = mongoose.connection;

DB.on('error', ()=>console.log("error in connecting to database"));
DB.once('open',()=>console.log("connected to Database Successfully"));

app.post('/sign_up', (req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var password = req.body.password;

    var data = {
        "name":name,
        "email":email,
        "mobile":mobile,
        "password":password
    }

    DB.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")
    });

    return res.redirect('signup_success.html')

})

app.get('/', (req,res)=>{
    // res.send("Hello From Server")
    res.set({
        "ALLow-access-ALLow-Origin": '*'
    })
    return res.redirect('index.html')
}).listen(3100);

console.log("Listening on port 3100")
