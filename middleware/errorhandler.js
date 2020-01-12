const errorHandler = function (err,req,res,next){
    res.status(500).send('Something Failed');

}
export default errorHandler;

 