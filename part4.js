const R = require('ramda')
const rastaArray = {
  firstName: "Bob",
  lastName: "Marley",
  age: 45,
  middleName: "Nesta",
  favoriteMusic: "Reggae",
  isRasta: true
}



const invertedArray = R.invertObj(rastaArray)

console.log(invertedArray)
