/// Ask the user for their age and how far they are travelling (in km)
/// The price per travelled km will be £0.21
/// Junior passengers (under 18) get a 20% discount
/// Senior passengers (over 65) get a 40% discount


/* const userAge = prompt("What's your age?");
const travelDistanceInKm = prompt("How far are you going? Please write it in Kilometres");

const pricePerTravelledKm = 0.21;

let ticketFare = travelDistanceInKm * pricePerTravelledKm;

const juniorDiscount = (ticketFare * 20) / 100;
const seniorDiscount = (ticketFare * 40) / 100;

if(userAge <18){
  console.log("As an underage, you get 20% discount, so your ticket will cost: " + "£" + (ticketFare-juniorDiscount).toFixed(2));
}   else if (userAge >=65){
  console.log("As a senior, you get 40% discount, so your ticket will cost: " + "£" + (ticketFare-seniorDiscount).toFixed(2));
   else {console.log("Your ticket will cost: " + "£" + ticketFare);
}
*/

let journey = prompt(
    `What journey are you planning?
    
    1 - Victoria Station to Paddington - 20km
    2 - Victoria 2 Station to Euston Station - 43km
    3 - Oval Station to London Bridge Station  - 5km
    4 - Stockwell Station to Piccadilly Station  - 7km
    5 - Gravesend Station to Kennington Station  - 30km

    Please, type in the number for your journey.
    `);

const userAge = prompt("What's your age?");

const pricePerKm = 0.21;

let distanceInKm = 0;
if(Number(journey) === 1){
    distanceInKm = 20;
} else if (Number(journey) === 2){
    distanceInKm = 43;
} else if (Number(journey) === 3){
    distanceInKm = 5;
} else if (Number(journey) === 4){
    distanceInKm = 7;
} else if (Number(journey) === 5){
    distanceInKm = 30;
}


const juniorDiscount = ((pricePerKm * distanceInKm) * 20) / 100;
const seniorDiscount = ((pricePerKm * distanceInKm) * 40) / 100;


if(Number(journey) === 1 && userAge < 18) {
console.log("As a underage, you get 20% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - juniorDiscount).toFixed(2));
} else if (Number(journey) === 1 && userAge >= 65) {
    console.log("As a senior, you get 40% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - seniorDiscount).toFixed(2));
}


else if(Number(journey) === 2 && userAge < 18) {
    console.log("As a underage, you get 20% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - juniorDiscount).toFixed(2));
    } else if (Number(journey) === 2 && userAge >= 65) {
        console.log("As a senior, you get 40% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - seniorDiscount).toFixed(2));
    }

else if(Number(journey) === 3 && userAge < 18) {
console.log("As a underage, you get 20% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - juniorDiscount).toFixed(2));
} else if (Number(journey) === 3 && userAge >= 65) {
    console.log("As a senior, you get 40% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - seniorDiscount).toFixed(2));
}

else if(Number(journey) === 4 && userAge < 18) {
    console.log("As a underage, you get 20% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - juniorDiscount).toFixed(2));
    } else if (Number(journey) === 4 && userAge >= 65) {
        console.log("As a senior, you get 40% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - seniorDiscount).toFixed(2));
    }


else if(Number(journey) === 5 && userAge < 18) {
console.log("As a underage, you get 20% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - juniorDiscount).toFixed(2));
} else if (Number(journey) === 5 && userAge >= 65){
    console.log("As a senior, you get 40% discount so your ticket costs: " + "£" + ((pricePerKm * distanceInKm) - seniorDiscount).toFixed(2));
}
else {
    console.log("Your ticket costs: " + "£" + (pricePerKm * distanceInKm).toFixed(2));
}
