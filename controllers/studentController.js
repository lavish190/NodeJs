const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/',(req,res)=>{
    res.render('student/addOrEdit',{
        viewTitle: 'Insert student'
    })
});
router.post('/',(req,res)=>{
    if(req.body._id ==''){
        insertRecord(req,res);
    }
    else{
        updateRecord(req,res);
    }
});
function insertRecord(req,res){
    console.log(req.body);
    var student = new Student();
    student.Name = req.body.Name;
    student.Date_of_birth = req.body.Date_of_birth;
    student.Gender = req.body.Gender;
    student.Address = req.body.Address;
    student.Address1 = req.body.Address1;
    student.Email_id = req.body.Email_id;
    student.Phone_No= req.body.Phone_No;
    student.Alternate_Phone_No = req.body.Alternate_Phone_No;
    student.Subject_Choosen[0] = req.body.Subject_Choosen0;
    student.Subject_Choosen[1] = req.body.Subject_Choosen1;
    student.Subject_Choosen[2] = req.body.Subject_Choosen2;
    student.Subject_Choosen[3] = req.body.Subject_Choosen3;
    student.Subject_Choosen[4] = req.body.Subject_Choosen4;
    student.Subject_Choosen[5] = req.body.Subject_Choosen5;
    console.log(student.Subject_Choosen);
    student.Class = req.body.Class;
    student.Semester = req.body.Semester;
    student.SchoolName_CollegeName = req.body.SchoolName_CollegeName;
    student.Fathers_Name = req.body.Fathers_Name;
    student.Mothers_Name = req.body.Mothers_Name;
    student.Fathers_Occupation = req.body.Fathers_Occupation;
    student.Mothers_Occupation = req.body.Mothers_Occupation;
    student.save().then(()=>{
        res.redirect('student/list');
    }).catch((err)=>{
        console.log(err);
    });
    
}
function updateRecord(req,res){
    student.findOneAndUpdate(
        {_id:req.body._id},
        req.body,{new:true},
        (err,doc)=>{
        if(!err){
            res.redirect("student/list");
        }
        else{
            console.log("Error during update:" + err);
        }
    }
);
}
function updateRecord(req, res){
    Student.findOneAndUpdate({_id:req.body._id},
        req.body,
         {new:true},
         (err,doc)=>{
        if(!err){
            res.redirect("student/list");
        }
        else{
            console.log("Error during update:"+err);
        }
    }
    );
}
router.get("/list",(req, res) =>{
    Student.find()
    .then(function(docs){
        res.render("student/list",{
            list:docs
        });
    })
    .catch(function(err){
        console.log("Error in get:"+err);
    });
});
router.get("/:id",(req, res) =>{
    Student.findById(req.params.id,(err,doc) =>{
        if(!err){
            res.render("student/addOrEdit",{
                viewTitle:"update student",
                student: doc
            });
            console.log(doc);
        }
    });
});
router.get('/delete/:id',(req, res) =>{
    Student.findByIdandremove(req.params.id,(err,doc) =>{
     if(!err){
        res.render("student/list");
     }
     else{
        console.log("Error in deletion"+err);
     }
    });
});
module.exports = router