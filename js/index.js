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
    const response = await fetch('http://localhost:5089/api/Login/Login', {
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
        window.location.href ='./events.html'; // Reload the page after successful login
        document.getElementById('loginLink').textContent = result.FirstName;
        sessionStorage.setItem('loginData', JSON.stringify(result));

        login = true; // Set login to true after successful login
    } else {
        alert('Fail');
    }
}

// Get login link and handle clicks
let loginLink = document.getElementById('loginLink');
let loginLinkM = document.getElementById('loginLinkM');

// Check if the user is logged in and update the link text accordingly
let userName = JSON.parse(sessionStorage.getItem('loginData'));
console.log(userName);
if (userName && userName.FirstName) {
    document.getElementById('loginLink').textContent = userName.FirstName;
    document.getElementById('loginLinkM').textContent = userName.FirstName;
    login = true; // Set login to true if user data exists
}

// Handle login link click
loginLink.addEventListener('click', () => {
    if (login) {
        // If user is logged in, redirect to the app page
        window.open("./profile.html") // Change this URL based on your page structure
    } else {
        // If user is not logged in, redirect to the login page
        window.location.href = "./login.html"; // Change this URL based on your page structure
    }
});
loginLinkM.addEventListener('click', () => {
    if (login) {
        // If user is logged in, redirect to the app page
        window.open("./profile.html") // Change this URL based on your page structure
    } else {
        // If user is not logged in, redirect to the login page
        window.location.href = "./login.html"; // Change this URL based on your page structure
    }
});

console.log(login)


document.addEventListener("DOMContentLoaded", ()=>{
    GetEvents()
    
})

// async function GetEvents() {
//     const response = await fetch('http://localhost:5089/api/Chat/GetChats', {
//         method: 'Get',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });

//     const result = await response.json();
//     console.log(result)
//     if (result.status !== 401) {
//         sessionStorage.setItem('eventList', JSON.stringify(result));
//     } else {
//     }
// }


async function GetEvents() {
    const response = await fetch('http://localhost:5089/api/Chat/GetChats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const result = await response.json();
    console.log(result);

    // Check if the result is not an error (status is not 401)
    if (result.status !== 401) {
        // Save the events to sessionStorage
        sessionStorage.setItem('eventList', JSON.stringify(result));

        // Sort the events by StartTime (closest to today)
        if (Array.isArray(result)) {
            const sortedEvents = sortStartTimesClosestToToday(result);

            // Store the sorted events in sessionStorage
            sessionStorage.setItem('sortedEvents', JSON.stringify(sortedEvents));

            // Call your existing function to create and display the elements
        } else {
            console.log('Invalid event list format.');
        }
    } else {
        console.log('Failed to fetch events or unauthorized.');
    }
}

// Function to sort events by StartTime closest to today
const sortStartTimesClosestToToday = (events) => {
    const today = new Date();
    return events.sort((a, b) => {
        const startTimeA = new Date(a.StartTime); // Use StartTime property
        const startTimeB = new Date(b.StartTime);

        // Calculate the absolute difference between each StartTime and today
        const diffA = Math.abs(today - startTimeA);
        const diffB = Math.abs(today - startTimeB);

        return diffA - diffB;  // Sort by closest to today (ascending)
    });
};




if(login === true)
    {
        let createEvent = document.getElementById('createEvent')
        createEvent.classList.add('flex')
    }
    else{
        createEvent.classList.add('hidden')
    }