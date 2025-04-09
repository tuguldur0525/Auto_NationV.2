var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


const showSignup = document.getElementById("showSignup"); 
const showLogin = document.getElementById("showLogin");   
const loginForm = document.getElementById("loginForm");   
const signupForm = document.getElementById("signupForm"); 

showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");

    showLogin.textContent = "Нэвтрэх";  
    showSignup.textContent = "Бүртгүүлэх";
});
showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    showSignup.textContent = "Бүртгүүлэх";
    showLogin.textContent = "Нэвтрэх";  
});