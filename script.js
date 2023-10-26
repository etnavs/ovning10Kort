console.log('');

// Hämta knappen och textarean med sina id:n
let cardButton = document.getElementById("cardButton");

// Lägg till en händelselyssnare för knappen
cardButton.addEventListener("click", function () {

    let kortadress = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetchCardImage();

});

function fetchCardImage() {

    imageContainer.innerHTML = "";

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Kontrollera om det finns resultat
            if (data.success) {

                const imageUrl = data.cards[0].image;

                // Skapa en bildtagg och ange src-attributet
                const image = document.createElement('img');
                image.src = imageUrl;

                // Lägg till bilden i din HTML-sida (till exempel i en befintlig div med id "image-container")
                imageContainer.appendChild(image);


            } else {
                resultTextarea.innerHTML = "Inga resultat hittades.";
            }
        })
        .catch(err => console.log(err));
}