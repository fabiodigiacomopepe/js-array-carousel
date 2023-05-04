// Creo array con percorso foto e relativo ALT
const immagini = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const alt = ["foto1", "foto2", "foto3", "foto4", "foto5"];

// Creo loop
for (let i = 0; i < immagini.length; i++) {
    let divItem = `<div class="item ${[i]}">`;                  // Creo DIV
    let img = `<img src="${immagini[i]}" alt="${alt[i]}">`;     // Creo IMMAGINe
    console.log(divItem);       // Riporto stringa DIV generata in console
    console.log(img);           // Riporto stringa IMG generata in console

    // Innesto DIV con all'interno IMG nell'ITEMS-CONTAINER (Template Literal)
    document.querySelector('.items-container').innerHTML += `${divItem}${img}`;
}

// Seleziono primo ITEM creato e aggiungo classe ACTIVE
let primoItem = document.querySelector('.item');
primoItem.classList.add("active");

// Loggo tutto il risultato in console
const items = document.querySelectorAll('.item');
console.log(items);

// Setto item ATTIVO al momento
let itemAttivo = 0;

// Seleziono pulsante NEXT
const next = document.querySelector(".next");

// Collego funzione ad EVENTO su NEXT
next.addEventListener("click", miaFunzione);

function miaFunzione() {
    if (itemAttivo < (items.length - 1)) {              // SE sono nelle prime 4 immagini
        items[itemAttivo].classList.remove("active");   // Rimuovo classe ACTIVE all'ITEM attualmente attivo
        itemAttivo += 1;                                // Incremento valore dell' ITEM ATTIVO
        items[itemAttivo].classList.add("active");      // Assegno classe ACTIVE all'elemento (attualmente) successivo
        
        if (itemAttivo === (items.length -1)) {         // SE sono nell'ultima foto
            next.classList.add("hidden");               // NASCONDO pulsante NEXT
        }
    }

}