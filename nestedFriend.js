let myScore = 90;
let friendScore = 60;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log("We will have a lunch.");
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log("Good luck next time.");
    } else if (friendScore < 60 && friendScore >= 40) {
        console.log("The message unseen.");
    } else {
        console.log("Block");
    }
} else {
    console.log("Sad");
}