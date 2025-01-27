// Gestion des événements au scroll
const events = [
    {
        trigger: 500,
        action: () => startDialogue([
            "Petite-fille: Grandma, pourquoi tu as un tatouage sur ton front et moi non ? je veux en avoir un aussi",
            "Grandma: Ah ma petite, tu es si attentive et si curieuse (RIRE), tu veux savoir pourquoi j’ai ce petit tatouage et toi non ? Mais non petite, toi tu ne peux pas te tatouer le front à cet âge là, tu es encore petite. Et je pense qu’il est temps de te raconter quelques trucs sur les traditions et les coutumes de la femme algérienne pour que tu saches ce qui est fait pour les grands et ce qui est fait pour les petits.",
            "Petite-fille: oui grandma raconte moi je suis impressionnée de le savoir.",
            "Grandma: Eh bien ma fleur, ouvre bien tes oreilles.",
            "La narration de la grandma à la petite-fille: “ Dans les siècles précédents, le tatouage chez la femme algérienne était considéré comme un symbole d’appartenance à une tribu et il peut aussi indiquer une identité culturelle. Ce tatouage se gravait sur le front, les joues et le montant. Parfois on trouvait une femme avec un seul tatouage sur le front ou sur le montant et parfois on trouvait une femme qui mettait du tatouage sur ses quatre endroits cités à la fois. Les motifs changeaient selon le souhait de chaque femme. Une petite fille qui n’avait pas encore l'âge qui lui permettait de faire ce tatouage, n’en avait pas le droit. Ce n’est qu’à partir que la fille devient grande ou adulte ou alors elle se marie. Il était souvent utilisé pour que la femme soit belle. Aujourd’hui, cette tradition n’existe plus mais on voit les traces de ces tatouages chez certaines femmes algériennes âgées qui ont vécu à l’époque où le tatouage était permis.",
            "Petite-fille: Ayyyy c’est génial ça! Je comprends maintenant pourquoi je ne peux pas mettre du tatouage sur mon visage (RIRE doux), car non seulement je suis petite mais aussi parce que cette tradition n’existe plus aujourd’hui car tout a changé.",
            "Grandma: oui ma belle",
            "Petite-fille: Mamie, tu as de très belles histoires apparemment (SOURIRE), je veux tout savoir sur la femme algérienne",
            "Grandma: Ah tu veux tout savoir sur les traditions et les femmes algériennes ?",
            "Petite-fille: oui s’il te plait, mamie, s’il te plait !",
            "Grandma: suis-moi alors, je vais te montrer quelque chose que tu vas certainement aimer"
        ])
    },
    {
        trigger: 1000,
        action: () => changeCharacterSprite("character_angry.png")
    },
    {
        trigger: 1500,
        action: () => playSound("suspense.mp3")
    },
];

let currentDialogueIndex = 0;  // Garde la trace de la réplique actuelle

// Fonction pour afficher un dialogue avec des répliques
function startDialogue(dialogues) {
    // Cache la boîte de dialogue avant de commencer
    const dialogueBox = document.getElementById('dialogue');
    dialogueBox.textContent = dialogues[currentDialogueIndex];
    dialogueBox.style.visibility = 'visible';

    // Attente d'un clic pour passer à la réplique suivante
    dialogueBox.addEventListener('click', function nextDialogue() {
        currentDialogueIndex++;

        // Si il y a encore des répliques, on les affiche
        if (currentDialogueIndex < dialogues.length) {
            dialogueBox.textContent = dialogues[currentDialogueIndex];
        } else {
            // Si toutes les répliques sont affichées, on cache la boîte de dialogue
            dialogueBox.style.visibility = 'hidden';
            currentDialogueIndex = 0;  // Réinitialisation pour la prochaine série de dialogues
            dialogueBox.removeEventListener('click', nextDialogue); // Enlever l'événement après la fin du dialogue
        }
    });
}

// Fonction pour déclencher un événement lors du scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollX;

    events.forEach(event => {
        if (!event.triggered && scrollPosition >= event.trigger) {
            event.action();
            event.triggered = true; // Empêche de déclencher l'événement plusieurs fois
        }
    });
});

function showDialogue(text) {
    const dialogueBox = document.getElementById('dialogue');
    dialogueBox.textContent = text;
    dialogueBox.style.visibility = 'visible';
}

function playSound(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Images initiales
const girlInit = "/graphique/girl/girl-1.png";
const grandmaInit = "/graphique/grandma/grandma.png";

// Frames des animations
const girlFrames = [
    "/graphique/girl/frame1.png",
    "/graphique/girl/frame2.png",
    "/graphique/girl/frame3.png",
    "/graphique/girl/frame4.png",
];

const grandmaFrames = [
    "/graphique/grandma/frame1.png",
    "/graphique/grandma/frame1.png",
];

let lastScrollPosition = 0;

// Précharge les images
function preloadImages(frames) {
    frames.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages(girlFrames);
preloadImages(grandmaFrames);

const girlSprite = document.getElementById("girl-sprite");
const grandmaSprite = document.getElementById("grandma-sprite");

const totalGirlFrames = girlFrames.length;
const totalGrandmaFrames = grandmaFrames.length;

function updateAnimation() {
    const scrollPosition = window.scrollX;

    const direction = scrollPosition > lastScrollPosition ? 1 : -1;
    lastScrollPosition = scrollPosition;

    // Calcule l'index de la frame à afficher pour chaque sprite
    const girlFrameIndex = Math.floor((scrollPosition / window.innerWidth) * totalGirlFrames) % totalGirlFrames;
    const grandmaFrameIndex = Math.floor((scrollPosition / window.innerWidth) * totalGrandmaFrames) % totalGrandmaFrames;

    girlSprite.src = girlFrames[girlFrameIndex];
    grandmaSprite.src = grandmaFrames[grandmaFrameIndex];

    resetScrollStopTimer();
}

// Timer pour revenir aux images initiales à l'arrêt du scroll
let scrollStopTimer;
function resetScrollStopTimer() {
    clearTimeout(scrollStopTimer);
    scrollStopTimer = setTimeout(() => {
        // Retourne aux images initiales
        girlSprite.src = girlInit;
        grandmaSprite.src = grandmaInit;
    }, 150); // Temps après lequel on considère que le scroll s'est arrêté
}

// Événement de scroll
window.addEventListener("scroll", () => {
    updateAnimation();
});