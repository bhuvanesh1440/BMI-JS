let run = true;

while (run) {
    let mass = parseFloat(prompt("Enter Your mass in Kg:"));
    let height = parseFloat(prompt("Enter Your Height in cm:"));

    height = height / 100;
    let bmi = mass / (height ** 2);
    alert("Your BMI is: " + bmi.toFixed(2));

    if (bmi < 18.5) {
        alert("You are Underweight");
    } else if (bmi < 25) {
        alert("You have normal weight");
    } else if (bmi < 30) {
        alert("Your overweight");
    } else {
        alert("Obesity");
    }

    let continueResponse = prompt("Do you want to calculate again? (yes/no)");
    if (continueResponse.toLowerCase() !== "yes") {
        run = false;
    }
}

alert("BMI calculation stopped.");
