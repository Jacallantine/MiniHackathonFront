async function CreateAccount()
{

    
    const formData = {
        AccountId: GUID(),
        FirstName : document.getElementById('firstName').value,
        LastName : document.getElementById('lastName').value,
        School : document.getElementById('school').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
    };
        const response = await fetch('http://localhost:5089/api/Account/NewAccount', {
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
                window.location.href ="./login.html"
            }
            else{
                alert('fail')
            }
    

        }
        function GUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }