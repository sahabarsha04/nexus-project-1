const form =document.getElementById('form');
const name_input =document.getElementById('name-input');
const email_input =document.getElementById('email-input');
const password_input =document.getElementById('password-input');
const confirm_password_input =document.getElementById('confirm-password-input');
const error_message = document.getElementById('error-message');
form.addEventListener('submit', (e)=>{

    let errors= [];

    if(name_input){
        errors=getSignupFormErrors(name_input.value, email_input.value, password_input.value, confirm_password_input.value);
    }
    else{
        errors=getLoginFormErrors(email_input.value, password_input.value);
    }

    if(errors.length>0){
        e.preventDefault();
        error_message.innerText = errors.join(".");
    }
});

function getSignupFormErrors(name,email, password, confirmpassword){
    let errors=[];

    if(name==""|| name ==null){
        errors.push('Name is required');
        name_input.parentElement.classList.add("incorrect");
    }

    if(email==""|| email==null){
        errors.push('Email is required');
        email_input.parentElement.classList.add("incorrect");
    }

    if(password==""|| password ==null){
        errors.push('Password is required');
        password_input.parentElement.classList.add("incorrect");
    }

    if(password.length>0 && password.length<8){
        errors.push('Password is too short');
        password_input.parentElement.classList.add("incorrect");
    }

    if(confirmpassword==""|| confirmpassword ==null){
        errors.push('Confirm password is required');
        confirm_password_input.parentElement.classList.add("incorrect");
    }

    if( confirmpassword.length!=0 && password!=confirmpassword){
        errors.push('Confirm password does not match');
        password_input.parentElement.classList.add("incorrect");
        confirm_password_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

 function getLoginFormErrors(email,password){
    let errors=[];
     
    if(email==""|| email==null){
        errors.push('Email is required');
        email_input.parentElement.classList.add("incorrect");
    }

    if(password==""|| password ==null){
        errors.push('Password is required');
        password_input.parentElement.classList.add("incorrect");
    }

    return errors;
 }
const allInputs=[name_input, email_input,password_input,confirm_password_input].filter(input=> input != null)
  allInputs.forEach(input=>{
    input.addEventListener('input', ()=>{
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect");
            error_message.innerText="";
        }
    });
  });
