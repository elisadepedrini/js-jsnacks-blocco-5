const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1


// MAP
const numberArray = numbers.map(myFunction)

function myFunction(number) {
    return number + 1
}

console.log(numberArray)

// Risultato: [3, 9, 5, 8, 3, 88]




// FOREACH
const newArray = []

numbers.forEach((number) => {
    const numberPlus = number + 1
    newArray.push(numberPlus)
    
})
console.log(newArray);




// FOR LOOP
const newNumber = []

for (let i = 0; i < numbers.length; i++) {
    const singleNumber = numbers[i] + 1
    
    newNumber.push(singleNumber)
}

console.log(newNumber);

