// Event list data
const events = [
    { name: "Troop Meeting", date: "2025-02-15" },
    { name: "Community Service", date: "2025-02-20" },
    { name: "Camping Trip", date: "2025-03-01" },
];

// Function to load events into the calendar
function loadEvents() {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear any existing events

    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(listItem);
    });
}

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-response").textContent = "Thank you for your message!";
        document.getElementById("form-response").style.color = "green";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").textContent = "Please fill out all fields.";
        document.getElementById("form-response").style.color = "red";
    }
});