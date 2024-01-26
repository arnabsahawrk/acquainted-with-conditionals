/* Grade Calculator 
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59 */

let result = 70;

if (result > 100 || result < 0) {
    console.log("invalid");
} else if (result >= 90 && result <= 100) {
    console.log('A');
} else if (result >= 80 && result <= 89) {
    console.log('B');
} else if (result >= 70 && result <= 79) {
    console.log('C');
} else if (result >= 60 && result <= 69) {
    console.log('D');
} else {
    console.log('F');
}