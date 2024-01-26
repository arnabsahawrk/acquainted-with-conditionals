let ticketPrice = 800;
let age = 26;
let discount;

if (age < 10) {
    console.log("Free.");
} else if (age >= 10 && age <= 25) {
    discount = ticketPrice * 50 / 100;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice);
} else if (age >= 60) {
    discount = ticketPrice * 15 / 100;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice);
} else {
    console.log(ticketPrice);
}