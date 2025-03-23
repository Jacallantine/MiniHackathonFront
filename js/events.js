function toggleDiv(element) {
    const detailsDiv = element.querySelector("#eventDetails");
    
    // Toggle the visibility of the details section
    detailsDiv.classList.toggle("hidden");
    
    // Optionally, toggle the arrow icon or any other indicator
    const arrowIcon = element.querySelector("img");

    if(arrowIcon.classList.contains('animateArrowRight'))
        {
            arrowIcon.classList.remove('animateArrowRight')
            arrowIcon.classList.add('animateArrowDown')
        }
        else{
            arrowIcon.classList.remove('animateArrowDown')
            arrowIcon.classList.add('animateArrowRight')
        }
}

let events = JSON.parse(sessionStorage.getItem('sortedEvents'));

console.log('events:', events);

if (events && events.length > 0) {
    let container = document.getElementById('EventContainer');

    events.forEach(event => {
        // Create the main event div
        let eventDiv = document.createElement('div');
        eventDiv.classList.add('bg-white', 'px-6', '[border-radius:6px]', 'flex', 'flex-col', 'py-2', 'cursor-pointer', 'eventDiv');
        eventDiv.setAttribute('onclick', 'toggleDiv(this)');
        eventDiv.id = event.accountId; // Use accountId as a unique identifier

        // Add the filter attribute
        eventDiv.setAttribute('filter', event.filter);  // Assuming event.filter contains the category like 'MIS', 'WIT', etc.

        // Create the top section (title + arrow)
        let topSection = document.createElement('div');
        topSection.classList.add('flex', 'justify-between', 'items-center');

        let title = document.createElement('h2');
        title.id = 'eventTitle';
        title.textContent = event.title;

        let arrowImg = document.createElement('img');
        arrowImg.src = '../assets/arrow.svg';
        arrowImg.alt = '';
        arrowImg.classList.add('arrow', 'animateArrowRight');

        topSection.appendChild(title);
        topSection.appendChild(arrowImg);

        // Create the hidden details section
        let detailsDiv = document.createElement('div');
        detailsDiv.classList.add('flex', 'flex-col', 'hidden');
        detailsDiv.id = 'eventDetails';

        let description = document.createElement('p');
        description.id = 'eventDescription';
        description.textContent = event.description;

        let time = document.createElement('p');
        time.id = 'eventTime';
        time.textContent = `${new Date(event.startTime).toLocaleString()} - ${new Date(event.endTime).toLocaleString()}`;

        let redirect = document.createElement('a');
        redirect.id = 'Description';
        redirect.textContent = event.redirectLink;

        detailsDiv.appendChild(description);
        detailsDiv.appendChild(time);
        detailsDiv.appendChild(redirect);

        // Append all sections to the main event div
        eventDiv.appendChild(topSection);
        eventDiv.appendChild(detailsDiv);

        // Append the complete event div to the container
        container.appendChild(eventDiv);
    });
} else {
    console.log('No events found in sessionStorage.');
}



document.getElementById('program').addEventListener('change', () => {
    // Get the selected value from the dropdown
    const selectedValue = document.getElementById('program').value;

    const events = document.querySelectorAll('.eventDiv');

    events.forEach(event => {
        const eventFilter = event.getAttribute('filter');  // Get the 'data-filter' value from the event

        if (selectedValue === 'ALL' || eventFilter === selectedValue) {
            event.style.display = 'flex';  // Show event
        } else {
            event.style.display = 'none';  // Hide event
        }
    });
});

document.getElementById('programM').addEventListener('change', () => {
    // Get the selected value from the dropdown
    const selectedValue = document.getElementById('programM').value;

    const events = document.querySelectorAll('.eventDiv');

    events.forEach(event => {
        const eventFilter = event.getAttribute('filter');  // Get the 'data-filter' value from the event

        if (selectedValue === 'ALL' || eventFilter === selectedValue) {
            event.style.display = 'flex';  // Show event
        } else {
            event.style.display = 'none';  // Hide event
        }
    });
});