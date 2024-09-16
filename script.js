const number = prompt("Введите число")

function getPositivness(value) {
    if (value > 0) {
        return 1
    } else if(value < 0) {
        return -1
    } else {
        return 0
    }
}

alert(getPositivness(number))

