function toggleDiv(element) {
    const detailsDiv = element.querySelector("#eventDetails");
    
    // Toggle the visibility of the details section
    detailsDiv.classList.toggle("hidden");
    
    // Optionally, toggle the arrow icon or any other indicator
    const arrowIcon = element.querySelector("img");
    if (detailsDiv.classList.contains("hidden")) {
        arrowIcon.style.transform = "rotate(0deg)";
    } else {
        arrowIcon.style.transform = "rotate(90deg)";
    }
}