const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

// with arrow function
people.forEach((person) => {
  console.log(person.name);
})

// with standard function
people.forEach(function(person) {
  console.log(person.name);
})

// Risultato: 'Paolo', 'Giulia', 'Marco'