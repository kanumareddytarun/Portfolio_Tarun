var typed = new Typed(".typing", {
    strings: ["", "Java Full Stack Developer", "AI Enthusiast", "Web Developer", "Problem Solver"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* Main Navigation and Section Handling */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                 addBackSection(i); // Add back-section to the previously active section
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
     allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for(let i=0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Attach event listeners to "Hire Me" buttons
document.querySelectorAll(".hire-me").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default jump
        
        // Find the current active section to set as 'back-section'
        let currentActiveSectionIndex = -1;
        allSection.forEach((section, index) => {
            if (section.classList.contains('active')) {
                currentActiveSectionIndex = index;
            }
        });

        showSection(this);
        updateNav(this);

        removeBackSection();
        if (currentActiveSectionIndex !== -1) {
            addBackSection(currentActiveSectionIndex);
        }
    });
});

/* Aside Toggler */
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


/* Contact Form Submission with Web3Forms */
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    result.innerHTML = "Sending...";
    result.style.color = "var(--text-black-700)"; // Use a neutral color

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Message sent successfully!";
                result.style.color = "green";
            } else {
                console.log(response);
                result.innerHTML = jsonResponse.message || "Something went wrong!";
                result.style.color = "red";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
            result.style.color = "red";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.innerHTML = '';
            }, 5000);
        });
});