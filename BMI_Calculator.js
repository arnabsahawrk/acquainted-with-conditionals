/* - BMI < 18.5, you are underweight.
- BMI >= 18.5 and BMI <=24.9, you are normal.
- BMI >=25 and BMI <= 29.9, you are overweight.
- Otherwise, you are obese. */

let weight = 60;
let height = 5.4;

let BMI = weight / (5.4) * 2;

if (BMI < 18.5) {
    console.log("you are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight.");
} else {
    console.log("you are obese.");
}