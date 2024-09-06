function carWash(input) {

    let total = 0;
    for (let i = 0; i <= input.length; i++) {
        let command = input[i];
        if (command === "soap") {
            total += 10;
        } else if (command === "water") {
            total += total * 0.2;
        } else if (command === "vacuum cleaner") {
            total += total * 0.25;
        } else if (command === "mud") {
            total -= total * 0.10;
        }
    }
    console.log(`The car is ${total.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
