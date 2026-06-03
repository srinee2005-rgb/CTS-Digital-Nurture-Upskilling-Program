console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Community Portal Loaded Successfully");
};

class Event {
    constructor(name, category, seats) {
        this.name = name;
        this.category = category;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const eventList = [
    new Event("Town Hall Cultural Gala", "cultural", 50),
    new Event("Community Sports Day", "sports", 30),
    new Event("Business Networking Workshop", "workshop", 25)
];

function displayEvents(events = eventList) {

    const container = document.getElementById("eventContainer");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {

        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats Available: ${event.seats}</p>
            <button onclick="registerUser('${event.name}')">
                Register
            </button>
        `;

        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px";

        container.appendChild(card);
    });
}

function registerUser(eventName) {

    try {

        const event = eventList.find(
            e => e.name === eventName
        );

        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        event.seats--;

        alert(
            `Registered Successfully for ${eventName}`
        );

        displayEvents();

    } catch (error) {

        alert(error.message);

    }
}

document.addEventListener("DOMContentLoaded", () => {

    displayEvents();

    const filter =
        document.getElementById("categoryFilter");

    if (filter) {

        filter.addEventListener("change", function () {

            if (this.value === "all") {

                displayEvents();

            } else {

                const filtered =
                    eventList.filter(
                        event =>
                        event.category === this.value
                    );

                displayEvents(filtered);
            }
        });
    }
});

function validatePhoneNumber(input) {

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(input.value)) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        input.focus();
    }
}
function handleEventTypeChange(select) {

    const feeDisplay =
        document.getElementById("feeDisplay");

    const fees = {
        cultural: "₹200",
        sports: "₹150",
        workshop: "₹300"
    };

    feeDisplay.innerHTML =
        "Registration Fee: " +
        (fees[select.value] || "");

    localStorage.setItem(
        "preferredEvent",
        select.value
    );
}

window.addEventListener("load", () => {

    const savedEvent =
        localStorage.getItem(
            "preferredEvent"
        );

    if (savedEvent) {

        const dropdown =
            document.getElementById("eventType");

        if (dropdown) {

            dropdown.value = savedEvent;
            handleEventTypeChange(dropdown);

        }
    }
});

function countCharacters(textarea) {

    const max = 250;

    const remaining =
        max - textarea.value.length;

    document.getElementById(
        "charCounter"
    ).textContent =
        `Characters remaining: ${remaining}`;
}

function handleFormSubmit(event) {

    event.preventDefault();

    const form =
        document.getElementById(
            "registrationForm"
        );

    const name =
        document.getElementById(
            "userName"
        ).value;

    const email =
        document.getElementById(
            "userEmail"
        ).value;

    if (name === "" || email === "") {

        alert(
            "Please fill all required fields."
        );

        return;
    }

    const output =
        document.getElementById(
            "formOutput"
        );

    output.style.display = "block";

    output.textContent =
        `${name} successfully registered!`;

    sendRegistration();
}

function handleFeedbackSubmit() {

    alert(
        "Feedback Submitted Successfully!"
    );
}

function handleRegisterClick() {

    console.log(
        "Register Button Clicked"
    );
}

function toggleImageSize(img) {

    img.classList.toggle("enlarged");
}

function handleVideoReady() {

    document.getElementById(
        "videoStatus"
    ).textContent =
        "Video ready to play";
}

function clearPreferences() {

    localStorage.clear();
    sessionStorage.clear();

    alert(
        "Preferences Cleared Successfully"
    );
}

function findNearbyEvents() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            position => {

                document.getElementById(
                    "locationResult"
                ).innerHTML =
                    `Latitude:
                    ${position.coords.latitude}
                    <br>
                    Longitude:
                    ${position.coords.longitude}`;

            },

            error => {

                alert(
                    "Location access denied."
                );

            },

            {
                enableHighAccuracy: true,
                timeout: 10000
            }
        );
    }
}

function sendRegistration() {

    const userData = {

        name:
            document.getElementById(
                "userName"
            ).value,

        email:
            document.getElementById(
                "userEmail"
            ).value
    };

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(userData)
        }
    )
        .then(response => response.json())
        .then(data => {

            console.log(
                "Registration Success:",
                data
            );

        })
        .catch(error => {

            console.error(
                "Error:",
                error
            );

        });
}

async function fetchEvents() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }
}

fetchEvents();
window.addEventListener(
    "beforeunload",
    function (e) {

        e.preventDefault();

        e.returnValue =
            "You have unsaved registration data.";
    }
);