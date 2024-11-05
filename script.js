const homeLink = document.getElementById("home-link");
const scheduleLink = document.getElementById("schedule-link");
const registerLink = document.getElementById("register-link");

function addHoverEffect(link) {
    link.addEventListener("mouseover", function() {
        link.style.backgroundColor = "#007bff"; 
        link.style.color = "white"; 
        link.style.borderRadius = "5px";
    });
    
    link.addEventListener("mouseout", function() {
        link.style.backgroundColor = "";
        link.style.color = ""; 
        link.style.borderRadius = ""; 
    });
}


addHoverEffect(homeLink);
addHoverEffect(scheduleLink);
addHoverEffect(registerLink);

document.getElementById('eventTitle').addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightblue';
});

document.getElementById('eventTitle').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'transparent';
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});