const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('.form-container.sign-in form');
    const signUpForm = document.querySelector('.form-container.sign-up form');

    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate login success
            localStorage.setItem('isLoggedIn', 'true');
            alert('Login successful!');
            window.location.href = '../home.html';  // Redirect to home
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate signup success
            localStorage.setItem('isLoggedIn', 'true');
            alert('Signup successful! Welcome!');
            window.location.href = '../home.html';  // Redirect to home
        });
    }
});
