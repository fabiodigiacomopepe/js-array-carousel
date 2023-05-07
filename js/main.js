// Creo array con percorso foto e relativo ALT
const immagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const alt = ["foto1", "foto2", "foto3", "foto4", "foto5"];

// Creo loop
for (let i = 0; i < immagini.length; i++) {
    // SLIDER PRINCIPALE
    let divItem = `<div class="item ${[i]}">`;                  // Creo DIV
    let img = `<img src="${immagini[i]}" alt="${alt[i]}">`;     // Creo IMMAGINE
    console.log(divItem);       // Riporto stringa DIV generata in console
    console.log(img);           // Riporto stringa IMG generata in console

    // Innesto DIV con all'interno IMG nell'ITEMS-CONTAINER (Template Literal)
    document.querySelector('.items-container').innerHTML += `${divItem}${img}`;



    // SLIDER LATERALE
    let divCard = `<div class="card">`;                                              // Creo DIV
    let imgCard = `<div class="layer"></div>                                        
                   <img class="img-card" src="${immagini[i]}" alt="${alt[i]}">`;     // Creo LAYER E IMMAGINE
    console.log(divCard);       // Riporto stringa DIV generata in console
    console.log(imgCard);       // Riporto stringa IMG generata in console

    // Innesto DIV con all'interno IMG nell'ITEMS-CONTAINER (Template Literal)
    document.querySelector('.slider-laterale').innerHTML += `${divCard}${imgCard}`;
}

// Seleziono primo ITEM creato e aggiungo classe ACTIVE
let primoItem = document.querySelector('.item');
primoItem.classList.add("active");

// Seleziono primo LAYER creato e aggiungo classe HIDDEN
let primoLayer = document.querySelector('.layer');
primoLayer.classList.add("hidden");

// Collego costante ITEMS a elenco ITEM
const items = document.querySelectorAll('.item');

// Collego costante LAYERS a elenco LAYER
const layers = document.querySelectorAll('.layer');

// Setto item ATTIVO al momento
let itemAttivo = 0;

// Seleziono pulsante NEXT
const next = document.querySelector(".next");

// Seleziono pulsante PREVIOUS
const previous = document.querySelector(".previous");

// Collego funzione ad EVENTO su NEXT
next.addEventListener("click", miaFunzione);

function miaFunzione() {
    items[itemAttivo].classList.remove("active");   // Rimuovo classe ACTIVE all'ITEM attualmente attivo

    layers[itemAttivo].classList.remove("hidden");  // Rimuovo classe HIDDEN al LAYER attualmente attivo

    if (itemAttivo === (items.length - 1)) {        // SE mi trovo nell'ULTIMA foto
        itemAttivo = -1;                            // Setto valore ITEM ATTIVO a -1 (così incrementato diventa 0)
    }
    itemAttivo = itemAttivo + 1;                    // Incremento valore dell' ITEM ATTIVO
    items[itemAttivo].classList.add("active");      // Assegno classe ACTIVE all'elemento (attualmente) successivo

    layers[itemAttivo].classList.add("hidden");     // Assegno classe HIDDEN all'elemento (attualmente) successivo
}

// Collego funzione ad EVENTO su PREVIOUS
previous.addEventListener("click", miaFunzione1);

function miaFunzione1() {
    items[itemAttivo].classList.remove("active");   // Rimuovo classe ACTIVE all'ITEM attualmente attivo

    layers[itemAttivo].classList.remove("hidden");  // Rimuovo classe HIDDEN al LAYER attualmente attivo

    if (itemAttivo === 0) {                         // SE mi trovo nella PRIMA foto
        itemAttivo = items.length;                  // Setto valore a ITEMS.LENGTH (5) (così decrementato diventa 4, cioè ultima foto)
    }
    itemAttivo = itemAttivo - 1;                    // Decremento valore dell' ITEM ATTIVO
    items[itemAttivo].classList.add("active");      // Assegno classe ACTIVE all'elemento (attualmente) successivo

    layers[itemAttivo].classList.add("hidden");     // Assegno classe HIDDEN all'elemento (attualmente) successivo
}
