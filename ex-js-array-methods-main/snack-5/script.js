const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

//FILTER
const evenArray = nums.filter((number) => number % 2 === 0)

console.log(evenArray);


// FOREACH
const newArray = []

nums.forEach((number) => {
    if (number % 2 === 0) {
        newArray.push(number)
    }
})

console.log(newArray);


// Risultato: [2, 8, 4, 12]