let mobileNav = document.querySelector('.MobileNav')
console.log(mobileNav)


function ToggleMobile()
{
    console.log('Entering function')
    if(mobileNav.classList.contains('SlideDown'))
        {
            console.log('in if')
        mobileNav.classList.remove('SlideDown')
        mobileNav.classList.add('SlideUp')
        }
    else{
        console.log('In else')
        mobileNav.classList.remove('SlideUp')
            mobileNav.classList.add('SlideDown')
    }
}


document.getElementById("LoginForm").addEventListener('submit', async function(event)
{
    event.preventDefault()
    let formData = new FormData(this)
    const data = Object.fromEntries(formData.entries())
    let response = await fetch('url',{

        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await response.json()
    console.log(result)
})