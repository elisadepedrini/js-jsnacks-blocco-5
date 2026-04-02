const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

let studentSelected


students.find((student) => {
  if (student.name === 'Marco Lanci') {
    studentSelected = student
  }
})

console.log(studentSelected.class);



// Correzione

let studentChoose = students.find((student) => {
  return student.name === 'Marco Lanci'
})

console.log(studentChoose.class);


// Risultato: '3C'