document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const panda = document.getElementById("panda");
    const arrow = document.getElementById("arrow");
    const heart = document.getElementById("heart");
    const envelope = document.getElementById("envelope");
    const flap = document.getElementById("flap");
    const card = document.getElementById("card");

    startBtn.addEventListener("click", () => {
        // 1. Hide Start Button
        startBtn.style.display = "none";

        // 2. Panda walks into the scene
        panda.classList.add("walk");

        // 3. Arrow shoots after Panda finishes walking
        setTimeout(() => {
            arrow.classList.add("shoot");
        }, 3600);

        // 4. Arrow hits the Heart
        setTimeout(() => {
            heart.classList.add("hit");
        }, 4100);

        // 5. Envelope emerges from the Heart
        setTimeout(() => {
            envelope.classList.remove("hidden");
            setTimeout(() => {
                envelope.classList.add("show");
            }, 50);
        }, 4700);
    });

    // 6. User taps envelope to reveal English Wishes
    envelope.addEventListener("click", () => {
        flap.style.transform = "rotateX(180deg)";
        
        setTimeout(() => {
            envelope.classList.remove("show");
            envelope.classList.add("hidden");
            
            card.classList.remove("hidden");
            setTimeout(() => {
                card.classList.add("open");
            }, 50);

            startPetalRain();
        }, 400);
    });

    // 7. Falling Petals Rain
    function startPetalRain() {
        setInterval(() => {
            const petal = document.createElement("div");
            petal.classList.add("petal");

            const size = Math.random() * 12 + 8;
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.3}px`;
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.animationDuration = `${Math.random() * 3 + 3}s`;

            document.body.appendChild(petal);

            setTimeout(() => petal.remove(), 6000);
        }, 120);
    }
});

