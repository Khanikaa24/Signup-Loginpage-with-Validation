document.addEventListener('DOMContentLoaded', function() {
    function showLogin() {
        document.getElementById('initialChoice').style.display = 'none';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }

    function showSignup() {
        document.getElementById('initialChoice').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    }

    window.showLogin = showLogin;
    window.showSignup = showSignup;

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validateSignup();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validateLogin();
    });
});

function validateSignup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const phone = document.getElementById('signupPhone').value.trim();
    const signupError = document.getElementById('signupError');

    if (!name) {
        signupError.textContent = 'Full name is required.';
        signupError.style.display = 'block';
        return;
    }

    if (!validateName(name)) {
        signupError.textContent = 'Full name must contain only letters.';
        signupError.style.display = 'block';
        return;
    }

    if (!email) {
        signupError.textContent = 'Email is required.';
        signupError.style.display = 'block';
        return;
    }

    if (!validateEmail(email)) {
        signupError.textContent = 'Invalid email address.';
        signupError.style.display = 'block';
        return;
    }

    if (!password) {
        signupError.textContent = 'Password is required.';
        signupError.style.display = 'block';
        return;
    }

    if (!phone) {
        signupError.textContent = 'Phone number is required.';
        signupError.style.display = 'block';
        return;
    }

    if (!validatePhone(phone)) {
        signupError.textContent = 'Invalid phone number.';
        signupError.style.display = 'block';
        return;
    }

    signupError.style.display = 'none';
    alert('Signup successful!');
}

function validateLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const loginError = document.getElementById('loginError');

    if (!email) {
        loginError.textContent = 'Email is required.';
        loginError.style.display = 'block';
        return;
    }

    if (!validateEmail(email)) {
        loginError.textContent = 'Invalid email address.';
        loginError.style.display = 'block';
        return;
    }

    if (!password) {
        loginError.textContent = 'Password is required.';
        loginError.style.display = 'block';
        return;
    }

    loginError.style.display = 'none';
    alert('Login successful!');
}

function validateName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
