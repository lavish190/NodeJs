const mongoose = require('mongoose')
var studentSchema = new mongoose.Schema({
    Name : {
     type: String,
      required:'This field is required',
    },
    Date_of_birth :{
        type: Date,
        require:'This field is required',
    },
    Gender :{
        type: String,
        require:'This field is required',
    },
    Address :{
        type: String,
        require:'This field is required',
    },
    Address1 :{
        type: String,
        require:'This field is required',
    },
    Email_id :{
        type: String,
        require:'This field is required',
    },
    Phone_No :{
        type: Number,
        require:'This field is required',
    },
    Alternate_Phone_No :{
        type: Number,
        require:'This field is required',
    },
    Subject_Choosen:[{
        type: String,
        require:'This field is required',
    }],
    Class :{
        type: Number,
        require:'This field is required',
    },
    Semester :{
        type: Number,
        require:'This field is required',
    },
    SchoolName_CollegeName :{
        type: String,
        require:'This field is required',
    },
    Fathers_Name :{
        type: String,
        require:'This field is required',
    },
    Mothers_Name :{
        type: String,
        require:'This field is required',
    },
    Fathers_Occupation :{
        type: String,
        require:'This field is required',
    },
    Mothers_Occupation :{
        type: String,
        require:'This field is required',
    },
});
mongoose.model("Student" ,studentSchema);