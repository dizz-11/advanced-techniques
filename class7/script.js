function checkDriverAge(age) {
    if (Number(age) < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off")
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    } else {
        console.log("Powering On. Enjoy the ride!")
    }
}