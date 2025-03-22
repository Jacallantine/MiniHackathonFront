async function Create()
{

    
    const formData = {
        FirstName : document.getElementById('firstName').value,
        LastName : document.getElementById('lastName').value,
        School : document.getElementById('school').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
    };
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        if(result != null)
            {
                alert('Success')
                window.open('../index.html')
                sessionStorage.setItem('loginData', JSON.stringify(result))
            }
            else{
                alert('fail')
            }
    

}
