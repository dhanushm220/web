function submitQuiz() {
    const answers = {
        q1: "a",
        q2: "c",
        q3: "c"
    };

    for (let [key, correct] of Object.entries(answers)) {
        const options = document.getElementsByName(key);
        options.forEach(option => {
            option.parentElement.classList.remove("correct", "incorrect");
            if (option.checked) {
                if (option.value === correct) {
                    option.parentElement.classList.add("correct");
                } else {
                    option.parentElement.classList.add("incorrect");
                }
            }
        });
    }
}

// Fetch joke from API
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("jokeOutput").innerText = `${data.setup} 🤔 ${data.punchline}`;
        })
        .catch(() => {
            document.getElementById("jokeOutput").innerText = "Couldn't fetch a joke, try again!";
        });
}

const slides = document.querySelector('.carousel-slides');
const slide = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();