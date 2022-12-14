function Cart(){
    window.location.href = "./Cart.html";
}

function Home(){
    window.location.href = "./Home.html";
}

function AboutCoolmate(){
    window.location.href = "./AboutCoolmate.html";
}

function Product(){
    window.location.href = "./Product.html";
}

function Login(){
    const PopUpLogin = document.getElementById("PopUp");
    PopUpLogin.style.display = "block";
}

function Close(){
    const PopUpLogin = document.getElementById("PopUp");
    PopUpLogin.style.display = "none";
}

function LoginAccount(){

}

function SignUp(){
    const SignUp = document.getElementById("SignUp");
    const PopUpLogin = document.getElementById("PopUp");
    SignUp.style.display = "block";
    PopUpLogin.style.display = "none";
}

function CloseSignUp(){
    const SignUp = document.getElementById("SignUp");
    const PopUpLogin = document.getElementById("PopUp");
    SignUp.style.display = "none";
    PopUpLogin.style.display = "block";
}

function SignUpAccount(){
    
}