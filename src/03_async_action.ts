import { autorun, makeObservable, observable, runInAction } from 'mobx'

class cPerson {
  @observable name: string
  @observable age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    makeObservable(this)
  }
}

const newPerson = new cPerson('Armando', 29)

autorun(() => {
  console.log(`Person: ${newPerson.name}, ${newPerson.age}`)
})

const sleep = () => new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

runInAction(async () => {
  newPerson.name = 'Cesar'
  await sleep() // await breaks the batching
  newPerson.age = 30
})

export {}
