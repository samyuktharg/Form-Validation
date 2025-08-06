const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const phoneInput=document.getElementById("phone");
const ageInput=document.getElementById("age");

function validateName(){
    const name=nameInput.value.trim();
    const regex=/^[A-Za-z\s]{2,}$/;
    const valid=regex.test(name);
    toggleFunction(nameInput,"nameError",valid,"Enter a valid name (letters and spaces only)!");
    return valid;
}

function validateEmail(){
    const email=emailInput.value.trim();
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid=regex.test(email);
    toggleFunction(emailInput,"emailError",valid,"Enter a valid email address!");
    return valid;
}

function validatePhone(){
    const phone=phoneInput.value.trim();
    const regex=/^\d{10}$/;
    const valid=regex.test(phone);
    toggleFunction(phoneInput,"phoneError",valid,"Enter a valid 10-digit phone no!");
    return valid;
}

function validateAge(){
    const age=parseInt(ageInput.value);
    const valid=!isNaN(age) && age>=18;
    toggleFunction(ageInput,"ageError",valid,"Must be 18 or above!");
    return valid;
}

function toggleFunction(input,errorId,isValid,message){
    const error=document.getElementById(errorId);
    if(isValid){
        input.classList.remove("invalid");
        input.classList.add("valid");
        error.textContent='';
    }
    else{
        input.classList.remove("valid");
        input.classList.add("invalid");
        error.textContent=message;
    }
}

[nameInput,emailInput,phoneInput,ageInput].forEach(input =>{
    input.addEventListener("input",() =>{
        switch(input.id){
            case "name":validateName();break;
            case "email":validateEmail();break;
            case "phone":validatePhone();break;
            case "age":validateAge();break;
        }
    });
});

document.getElementById("registrationForm").addEventListener("submit",function(e){
    e.preventDefault();
    if(validateName() & validateEmail() & validatePhone() & validateAge()){
        alert("Form submitted successfully!");
        this.reset();
        [nameInput,emailInput,phoneInput,ageInput].forEach(input =>{
            input.classList.remove("valid");
        });
    }
    else{
        alert("Please correct the mistakes before submitting!");
    }
});