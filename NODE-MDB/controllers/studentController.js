const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/',(req, res)=>{
    res.render('student/addOrEdit',{
        viewTitle: 'Insert Student'
    })
})

router.post('/', (req, res)=>{
    if(req.body._id == ''){
        InsertRecord(req,res)
    }else{
        updateRecord(req,res)
    }
})

function InsertRecord(req,res){
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((err,docs)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log('error during insert:' +err)
        }
    })
}

function updateRecord(req,res){
    Student.findOneAndUpdate({_id: req.body._id},req.body,{new: true},(err,doc)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log('Error during update:' +err);
        }
    }
    );
}

router.get('/list',(req,res)=>{
    Student.find((err,docs)=>{
        if(!err){
            res.render('student/list',{
                list: docs
            })
        }else{
            console.log('Error in retrieval:' +err)
        }
    });
})

router.get('/:id',(req,res)=>{
    Student.findById(req.params.id, (err, docs)=>{
        if(!err){
            res.render('student/addOrEdit',{
                viewTitle: 'Update Student',
                student: docs
            });
            console.log(docs);
        }
    });
});

router.get('/delete/:id',(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.render('student/list');
        }else{
            console.log("Error in deletion:" +err);
        }
    });
});

module.exports = router


