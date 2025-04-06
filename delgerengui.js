var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
function selectCountry(){
    var country = document.getElementById("country").ariaValueMax;
    document.getElementById("selectedCountry").innerText="Сонголоо: "
}
document.addEventListener("DOMContentLoaded", function () {
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


function toggleThumbnails() {
    const hiddenThumbs = document.querySelectorAll('.hidden-thumb');
    const toggleBtn = document.getElementById('toggleThumbsBtn');
  
    // Check if currently shown
    const areHidden = hiddenThumbs[0].style.display === 'none' || hiddenThumbs[0].style.display === '';
  
    if (areHidden) {
      hiddenThumbs.forEach(img => img.style.display = 'block');
      toggleBtn.textContent = 'Show less';
    } else {
      hiddenThumbs.forEach(img => img.style.display = 'none');
      toggleBtn.textContent = '+7 more';
    }
  }
  