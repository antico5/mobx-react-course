import { observable } from "mobx"

const person = observable({
  firstName: 'Armando',
  lastName: 'Andini'
})

console.log(person)

export {}