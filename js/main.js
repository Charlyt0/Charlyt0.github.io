document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const invitation = document.getElementById("invitation");
    const envelopeContainer = document.getElementById("envelope-container");
    const sound = document.getElementById("open-sound");

    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        sound.play();
        setTimeout(() => {
            envelopeContainer.classList.add("hidden");
            invitation.classList.remove("hidden");
        }, 1500);
    });
});
