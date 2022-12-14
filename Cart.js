function VNPay(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (VNPay)";
}

function NinePay(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (9Pay)";
}

function COD(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (COD)";
}

function Momo(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (Momo)";
}

function ZaloPay(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (ZaloPay)";
}

function ShopeePay(){
    NameOfPaymentContent = document.getElementById("NameOfPaymentContent");
    NameOfPaymentContent.innerText = "Thanh toán (ShopeePay)";
}

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