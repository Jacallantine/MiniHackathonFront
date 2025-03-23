let accountId = JSON.parse(sessionStorage.getItem('loginData'));
console.log(accountId.AccountId)



async function CreateEvent() {
    const formData = {
        AccountId : accountId.AccountId,
        Title: document.getElementById('eventTitle').value,
        Description: document.getElementById("eventDesc").value,
        StartTime: document.getElementById('eventStartDate').value,
        EndTime:document.getElementById('eventEndDate').value,
        RedirectLink: document.getElementById('redirectLink').value,
        Filter: document.getElementById('program').value
        

    };
    console.log(formData)
    const response = await fetch('http://localhost:5089/api/Chat/NewChat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        
}