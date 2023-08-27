export const isSignUpFormEmpty = ({firstName , lastName, email, password, dateOfBirth, gender}) => {
    if(!firstName || !lastName || !email || !password || !dateOfBirth || !gender){
        return({status:false,message:"Please fill all the details!"});
    } else {
        return({status:true});
    }
}

export const emailValidator = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
        return({status:false,message:"Please enter a valid email!"});
    } else {
        return({status:true});
    }
}

export const passwordValidator = (password) => {
    const req=["Password must have"];
    if(password.length<8){
        req.push("atleast 8 characters")
    }
    if(password.search(/[a-z]/i)<0){
        req.push("atleast one lowercase")
    }
    if(password.search(/[A-Z]/i)<0){
        req.push("atleast one uppercase")
    }
    if(password.search(/[!@#$%^&*]/)<0){
        req.push("atleast one special character (! @ # $ % ^ & *)");
    }
    if(req.length>1){
        return({status:false,message: req.join(" ")});
    } else {
        return({status:true});
    }
}

export const isLogInFormEmpty = ({email, password}) => {
    if(!email || !password){
        return({status:false,message:"Please fill all the details!"});
    } else {
        return({status:true});
    }
}