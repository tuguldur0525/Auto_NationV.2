document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    
    function showMenu() {
        navLinks.style.right = "0";
    }
    
    function hideMenu() {
        navLinks.style.right = "-200px";
    }
    
    menuIcon.addEventListener('click', showMenu);
    closeIcon.addEventListener('click', hideMenu);
    
    // Profile tab switching
    const profileNavBtns = document.querySelectorAll('.profile-nav-btn');
    const profileTabs = document.querySelectorAll('.profile-tab');
    
    profileNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and tabs
            profileNavBtns.forEach(b => b.classList.remove('active'));
            profileTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Save button functionality
    const saveButtons = document.querySelectorAll('.save-btn:not(.action-btn)');
    saveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Show success message
            alert('Амжилттай хадгалагдлаа!');
            
            // In a real app, you would send data to server here
        });
    });
    
    // Post actions
    const postActionButtons = document.querySelectorAll('.action-btn');
    postActionButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.classList.contains('edit') ? 'засварлах' : 
                          this.classList.contains('delete') ? 'устгах' : 
                          this.classList.contains('view') ? 'харах' : 
                          this.classList.contains('contact') ? 'холбогдох' : 
                          this.classList.contains('repost') ? 'дахин зарлах' : 
                          this.classList.contains('activate') ? 'идэвхжүүлэх' : '';
            
            if (action) {
                alert(`"${this.closest('.post-card').querySelector('h3').textContent}" зар ${action} үйлдэл хийгдлээ!`);
            }
        });
    });
    
    // Add new post button
    const addNewPostBtn = document.querySelector('.add-new-post-btn');
    if (addNewPostBtn) {
        addNewPostBtn.addEventListener('click', function() {
            // Redirect to add new post page
            window.location.href = 'zar_nemeh.html';
        });
    }
    
    // Danger buttons
    const logoutBtn = document.querySelector('.danger-btn.logout');
    const deleteAccountBtn = document.querySelector('.danger-btn.delete-account');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Та системээс гарахдаа итгэлтэй байна уу?')) {
                // In a real app, you would handle logout here
                alert('Амжилттай гарлаа');
                window.location.href = 'index.html';
            }
        });
    }
    
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', function() {
            if (confirm('Та бүртгэлээ устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцаах боломжгүй!')) {
                // In a real app, you would handle account deletion here
                alert('Бүртгэл амжилттай устгагдлаа');
                window.location.href = 'index.html';
            }
        });
    }
    
    // Password form submission
    const passwordForm = document.querySelector('.password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPass = this.querySelector('input[type="password"]').value;
            const newPass = this.querySelectorAll('input[type="password"]')[1].value;
            const confirmPass = this.querySelectorAll('input[type="password"]')[2].value;
            
            if (newPass !== confirmPass) {
                alert('Шинэ нууц үг таарахгүй байна!');
                return;
            }
            
            if (newPass.length < 6) {
                alert('Шинэ нууц үг хамгийн багадаа 6 тэмдэгтээс бүрдсэн байх ёстой!');
                return;
            }
            
            // In a real app, you would send this to server
            alert('Нууц үг амжилттай солигдлоо!');
            this.reset();
        });
    }
});