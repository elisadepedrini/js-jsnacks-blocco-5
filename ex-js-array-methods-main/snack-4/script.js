const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

// MAP
const nameAuthor = posts.map((name) => {
  return name.author
})

console.log(nameAuthor);


// FOREACH
const newArray = []

posts.forEach((object) => {
  const nameObject = object.author
  newArray.push(nameObject)
})

console.log(newArray);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']