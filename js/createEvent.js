let accountId = JSON.parse(sessionStorage.getItem('loginData'));
console.log(accountId.AccountId)


async function CreateEvent() {
    // Function to format the date-time to SQL format (YYYY-MM-DD HH:MM:SS)
    function formatToSQLDateTime(dateInput) {
        const date = new Date(dateInput); // Convert the input string to a Date object
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // Collect form data
    const formData = {
        AccountId: accountId.AccountId,
        Title: document.getElementById('eventTitle').value,
        Description: document.getElementById("eventDesc").value,
        StartTime: formatToSQLDateTime(document.getElementById('eventStartDate').value),
        EndTime: formatToSQLDateTime(document.getElementById('eventEndDate').value),
        RedirectLink: document.getElementById('redirectLink').value,
        Filter: document.getElementById('program').value
    };

    console.log(formData);

    // Send data to the server
    const response = await fetch('http://localhost:5089/api/Chat/NewChat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    // Handle the response if needed
    if (response.ok) {
        const result = await response.json();
        console.log('Event created successfully:', result);
    } else {
        console.error('Error creating event:', response.statusText);
    }
}
