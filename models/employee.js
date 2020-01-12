import mongoose from 'mongoose';


const Employee = mongoose.model('Employee', new mongoose.Schema({
    name:{
       type: String,
       required: [true,'cant be blank'],
       minlength: 5,
       maxlength: 50

    },
    password:{
        type: String,
        required: [true,'cant be blank'],
        minlength: 5,
        maxlength: 50
 
     },
    position:{
        type: String,
        required:[true,'cant be blank'],
        minlength: 5,
        maxlength:80

    },
    national_id: {
        type: Number,
        required:true
        
       

    },
    email:{
        type: String,
        required:[true,'cant be blank'],
        minlength:3,
        maxlength: 50,
        lowercase:true,
        unique: true

    },
    phoneNumber:{
        type:Number,
        required: true,
        

    },
    status:{
        type: String,
        required:[true,'active','inactive']

    },
    dateOfBirth:{
        type:Date,
        minlength: '2002-01-01',
        maxlength:'1920-12-31'


    }
    

    
}));

export default Employee;
