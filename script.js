var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function selectCountry() {
    var country = document.getElementById("country").ariaValueMax;
    document.getElementById("selectedCountry").innerText = "Сонголоо: "
}
document.addEventListener("DOMContentLoaded", function() {
    let yearDropdown = document.getElementById("yearDropdown");

    if (yearDropdown) {
        for (let i = new Date().getFullYear(); i >= 2000; i--) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            yearDropdown.appendChild(option);
        }
    }
});

//nevtersen eshiig shalgah
document.addEventListener('DOMContentLoaded', function() {
    const zarNemehLink = document.querySelector('a[href="zar_nemeh.html"]');

    if (zarNemehLink) {
        zarNemehLink.addEventListener('click', function(e) {
            // burtguulsen esehiig shalgana
            const isAuthenticated = localStorage.getItem('isAuthenticated');

            if (!isAuthenticated) {
                e.preventDefault(); // zar nemehruu oruulahaas sergiilne
                alert('Та эхлээд бүртгүүлнэ үү.');
                window.location.href = 'nevtreh.html'; // burtguuleh huudasruu ywna
            }
        });
    }
});

//Automataar log out hiine 30minutiin daraa
setInterval(() => {
    localStorage.removeItem('isAuthenticated');
}, 1800000);