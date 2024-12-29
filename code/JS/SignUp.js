function returnBack(){
    window.location.href = "Home.html";
}

let timer;

function setTimer(){
    timer = setInterval(() =>{
        var time = document.getElementById('timer');
        var newTime = parseInt(time.textContent)-1;
        time.innerHTML = newTime;
        if(newTime <= 0){
            clearInterval(timer)
            window.location.href = "Home.html"
        }
    }, 1000);
}

function validate(){
    
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var password = document.getElementById('password').value;
    var check = document.getElementById('check');
    // console.log(dob)

    var warning = document.getElementById('warning');
    warning.innerHTML = "";
    if(!name){
        warning.innerHTML = "please fill out name";
        return;
    }
    if(!(email.includes('@') && email.includes("mail.com"))){
        warning.innerHTML = "email must be in the correct format"
        return;
    }
    if(gender === "default"){
        warning.innerHTML = "please pick your gender";
        return;
    }
    if(!dob){
        warning.innerHTML = "Please fill in date of birth"
        return;
    }
    if(!address){
        warning.innerHTML = "Please fill in the address"
        return;
    }
    if(password){
        var number = 0;
        for(let i = 0; i < password.length; i++){
            let x = password.charCodeAt(i);
            if(x >= 48 && x <= 57){
                number++;
            }
        }
        if(!number){
            warning.innerHTML = "Password must contain at least 1 number"
            return;
        }
    }
    if(!password){
        warning.innerHTML = "Please Fill in Password";
        return;
    }
    if(!check.checked){
        warning.innerHTML = "Please agree to our terms and conditions"
        return;
    }

    document.getElementById('success').classList.add('active');
    var time = document.getElementById('timer');
    setTimer();


}