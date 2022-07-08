
const cardNumbers = [6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const allSuitsData = 
[{name: "♠", styleClass: "black"},
{name: "♥", styleClass: "red"},
{name: "♦", styleClass: "red"},
{name: "♣", styleClass: "black"}
];


let cardMarkup = "";
for (let eachCardNumber of cardNumbers) {
    for (let suitData of allSuitsData) {
        cardMarkup += `<div class="card__container">
            <div class="card">
                <div class="card__front"><img src="./img/back-of-card.jpg" alt=""></div>
                <div class="card__back">
                <div class="card__number ${suitData.styleClass}"><p>${eachCardNumber}</p></div>
                <div class="card__suit ${suitData.styleClass}"><p>${suitData.name}</p></div> 
                </div>
            </div>
    </div>`
    }

}

document.getElementById("tableForCards").innerHTML = cardMarkup;

//////////////////////////////////////////




// const allSuits = ["♠", "♥", "♦", "♣"];



// let cardMarkup = "";
// for (let cardNumber of numbers) {
//     for (let cardSuit of allSuits) {
//         cardMarkup += `<div class="card__container">
//             <div class="card">
//                 <div class="card__front"><img src="./img/back-of-card.jpg" alt=""></div>
//                 <div class="card__back">
//                 <div class="card__number"><p>${cardNumber}</p></div>
//                 <div class="card__suit"><p>${cardSuit}</p></div>  
//                 </div>
//             </div>
//     </div>`
//     }

// }

// for (let suitData of allSuitsData){
//     console.log(`<div class="card__suit ${suitData.styleClass}"><p>${suitData.name}</p></div>`)
// }


