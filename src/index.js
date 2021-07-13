/// Ask the user for their age and how far they are travelling (in km)
/// The price per travelled km will be £0.21
/// Junior passengers (under 18) get a 20% discount
/// Senior passengers (over 65) get a 40% discount


const userAge = prompt("What's your age?");
const travelDistanceInKm = prompt("How far are you going? Please write it in Kilometres");

const pricePerTravelledKm = 0.21;

let ticketFare = travelDistanceInKm * pricePerTravelledKm;

const juniorDiscount = (ticketFare * 20) / 100;
const seniorDiscount = (ticketFare * 40) / 100;

if(userAge <18){
    console.log("As an underage, you get 20% discount, so your ticket will cost: " + "£" + (ticketFare-juniorDiscount).toFixed(2));
}   else if (userAge >=65){
    console.log("As a senior, you get 40% discount, so your ticket will cost: " + "£" + (ticketFare-seniorDiscount).toFixed(2));
}   else {console.log("Your ticket will cost: " + "£" + ticketFare);
}