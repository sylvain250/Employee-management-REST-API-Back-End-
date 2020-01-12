import Employee from '../models/employee';

 export const createEmployee = async(req,res,next)=>{
     try{

        let employee = new Employee({
            name: req.body.name,
            email:req.body.email,
            status: req.body.status,
            position: req.body.position,
            password: req.body.password,
            national_id: req.body.national_id,
            dateOfBirth: req.body.dateOfBirth,
            phoneNumber: req.body.phoneNumber
   
   
           });
        employee = await employee.save();
        res.status(201).send(employee);

     }
     catch(ex){ 
         next(ex);
     }
     
}
export const deleteEmployee = async(req,res,next)=>{

    //after installing database you should use findBYIdAndRemove method instead of find
    try{

    let findEmployee  = await Employee.findByIdAndRemove (req.params.id);
    if(!findEmployee) return res.status(404).send('Employee with the given ID was not found');

    res.status(201).send(findEmployee);

    }
    catch(ex){
        next(ex);

    }

    


}
export const editEmployee = async(req,res,next)=>{

    try{

        let findEmployee  = await Employee.findByIdAndUpdate(req.params.id,{name: req.body.name},{new:true});
        
        if(!findEmployee) return res.status(404).send('Employee with the given ID was not found');
     
         res.send(findEmployee);

    }
    catch(ex){
        next(ex);
    }
    
   
}
 

export const activateEmployee = async (req,res,next)=>{
    try{
     let findEmployee  = await Employee.findByIdAndUpdate(req.params.id,{status: req.body.status});

    if(!findEmployee) return res.status(404).send('Employee with the given ID was not found');

    findEmployee.status = req.body.status;

    if(findEmployee.status === 'active')
    return res.status(200).json ({
        status: 'success',
        data:{
          message: 'The Employee has been activated successfully',
          data: findEmployee
        }
        
       
      });
      else 
      return res.status(400).send('BAD INPUT:The Employee has not been activated');

    }
    catch(ex){
        next(ex)
    }

}

export const suspendEmployee = async (req,res,next)=>{
    try{

    let findEmployee  = await Employee.findByIdAndUpdate(req.params.id,{status: req.body.status});
    if(!findEmployee) return res.status(404).send('Employee with the given ID was not found');

    findEmployee.status = req.body.status;

    if(findEmployee.status === 'inactive')
    return res.status(200).json ({
        status: 'success',
        message: 'The Employee has been suspended successfully',
        data:findEmployee
        });
        else 
        return res.status(400).send('BAD INPUT:The Employee has not been SUSPENDED');
        
       
      }

    
    catch(ex){
        next(ex);
    }
    

}

export const searchEmployee = async(req,res,next)=> {
    try{
        
        let findEmployee = await Employee.findOne({
            name:req.body.name},
            {email:req.body.email},
            {position:req.body.position},
            {phoneNumber:req.body.phoneNumber});
        
    
        if(!findEmployee) return res.status(404).send('Employee with the given credentials was not found');

        // if(findEmployee.name === req.body.name){
        //     return res.status(200).send(findEmployee);

        // }else if(findEmployee.email === req.body.email){
        //     return res.status(200).send(findEmployee);

        //  } else if( findEmployee.position === req.body.position){
        //     return res.status(200).send(findEmployee);

        //  } else if(findEmployee.phoneNumber === req.body.phoneNumber){
        //     return res.status(200).send(findEmployee);

        //  }
        
        
        

    }
    catch(ex){
        next(ex)
    }
    
}