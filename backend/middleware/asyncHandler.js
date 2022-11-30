const asyncHandler = (fn) => async(...args)=>{
    try{
        await fn(...args);
    }catch(error){
        console.log(error);
    }    
};

module.exports =asyncHandler;