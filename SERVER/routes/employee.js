import express from 'express';
import validateEmployee from '../middleware/validator';
import  {createEmployee,deleteEmployee,activateEmployee,suspendEmployee,editEmployee,searchEmployee} from '../controllers/employee';

const router = express.Router();


router.post('/employee',validateEmployee,createEmployee);
router.delete('/employee/:id',deleteEmployee);
router.put('/employee/:id',editEmployee);
router.put('/employee/:id/activate', activateEmployee);
router.put('/employee/:id/suspend',suspendEmployee);
router.post ('/employee/search', searchEmployee);


export default router;