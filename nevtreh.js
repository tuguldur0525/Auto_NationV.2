const navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// nevtreh js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // input uud
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // authentication
    if (username && password) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна!');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // register hiih
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // validation
    if (username && email && phone && password) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Бүх талбарыг бөглөнө үү!');
    }
});