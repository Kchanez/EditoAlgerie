const textElement = document.getElementById('text');
const typingSound = document.getElementById('typing-sound');
const text = "L'enfance est le monde du possible, l'adolescence est le monde du doute, et la vieillesse est le monde de la mémoire.";
const imageContainer = document.getElementById('image-container');
const introImage = document.getElementById('intro-image');

// Fonction qui montre l'image d'intro, puis commence à afficher le texte
window.onload = function () {
    setTimeout(() => {
        // Cacher l'image après un court délai
        imageContainer.style.display = 'none';
        // Afficher le contenu
        document.getElementById('content').style.display = 'block';
        startTypingEffect();  // Commence à afficher le texte avec l'animation typing
    }, 2500);  // Délai de 2.5 secondes avant de commencer à afficher le texte
};

// Fonction pour démarrer l'effet d'écriture
function startTypingEffect() {
    typingSound.play(); // Joue l'audio
    textElement.textContent = "";  // Réinitialiser le texte avant de le commencer
    let currentIndex = 0;

    function typeNextLetter() {
        if (currentIndex < text.length) {
            textElement.textContent += text[currentIndex]; // Ajoute une lettre
            typingSound.play(); // Joue le bruit de la frappe
            currentIndex++;
            setTimeout(typeNextLetter, 100);  // Appel récursif pour afficher la lettre suivante après 100ms
        } else {
            // Quand le texte est totalement écrit, on arrête le son
            typingSound.pause();
            typingSound.currentTime = 0; // Réinitialise l'audio pour le lire à partir du début la prochaine fois
            setTimeout(redirectToAnotherPage, 2000); // Attends 2 secondes avant de rediriger
        }
    }

    typeNextLetter();  // Commence à afficher le texte lettre par lettre
}

// Fonction pour rediriger vers une autre page
function redirectToAnotherPage() {
    window.location.href = 'exposition.html';  // Remplace 'exposition.html' par l'URL de la page suivante
}
