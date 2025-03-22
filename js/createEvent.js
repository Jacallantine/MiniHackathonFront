async function CreateEvent() {
    const formData = {
        Email: document.getElementById('eventTitle').value,
        Password: document.getElementById('eventDate').value,
    };
    const response = await fetch('http://localhost:5087/api/Chat/NewChat', {
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