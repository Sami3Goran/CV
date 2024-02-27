// Klicka på en del av webbplatsen för att byta bakgrund

document.addEventListener('click', function(event) {
    var target = event.target;
    //dessa ställen utlöser ändring av bakgrund
    if (target.tagName === 'HEADER' || target.tagName === 'NAV' || target.tagName === 'FOOTER') {
        changeBackground();
    }
});

// Funktion för att ändra bakgrund
function changeBackground() {
    // Byt bakgrundsfärg eller bild här
    document.body.style.backgroundImage = "background2";
}

// för att visa ett meddelande genom att skriva 1337 i tangentbordet
var konamiCode = [];
var konamiSequence = [49, 51, 51, 55]; // 1337 i ASCII

document.addEventListener('keydown', function(event) {
    konamiCode.push(event.keyCode);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    if (konamiCode.toString() == konamiSequence.toString()) {
        showModal("What you seek will find you...");
        konamiCode = [];
    }
});

// här kommer modal popup visas
function showModal(message) {
    alert(message);
}