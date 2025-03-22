let mobileNav = document.querySelector('.MobileNav');
console.log(mobileNav);

let login = false; // Track login status

function ToggleMobile() {
    console.log('Entering function');
    if (mobileNav.classList.contains('SlideDown')) {
        console.log('in if');
        mobileNav.classList.remove('SlideDown');
        mobileNav.classList.add('SlideUp');
    } else {
        console.log('In else');
        mobileNav.classList.remove('SlideUp');
        mobileNav.classList.add('SlideDown');
    }
}

async function Login() {
    const formData = {
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
    };
    const response = await fetch('http://localhost:5087/api/Login/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status !== 401) {
        console.log(result);
        alert('Success');
        window.location.reload(); // Reload the page after successful login
        document.getElementById('loginLink').textContent = result.FirstName;
        sessionStorage.setItem('loginData', JSON.stringify(result));

        login = true; // Set login to true after successful login
    } else {
        alert('Fail');
    }
}

// Get login link and handle clicks
let loginLink = document.getElementById('loginLink');

// Check if the user is logged in and update the link text accordingly
let userName = JSON.parse(sessionStorage.getItem('loginData'));
console.log(userName);
if (userName && userName.FirstName) {
    document.getElementById('loginLink').textContent = userName.FirstName;
    login = true; // Set login to true if user data exists
}

// Handle login link click
loginLink.addEventListener('click', () => {
    if (login) {
        // If user is logged in, redirect to the app page
        window.open("./app.html") // Change this URL based on your page structure
    } else {
        // If user is not logged in, redirect to the login page
        window.location.href = "./login.html"; // Change this URL based on your page structure
    }
});

console.log(login)
