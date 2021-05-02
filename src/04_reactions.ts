import { action, autorun, makeObservable, observable, reaction, runInAction, when } from 'mobx'

class Person {
  @observable name = ''
  @observable age = 0
  @observable isAlive: boolean = true

  constructor (props: Partial<Person>) {
    Object.assign(this, props)
    makeObservable(this)

    // 2nd reaction type: when
    when(() => this.age > 99, () => this.setAlive(false))
  }

  @action setAge (age: number) {
    this.age = age
  }

  @action setAlive (isAlive: boolean) {
    this.isAlive = isAlive
  }
}

const newPerson = new Person({ name: 'Armando', age: 29 })

// 1st reaction type: autorun
const autorunDisposer = autorun(() => {
  console.log(`Person: ${newPerson.name}, ${newPerson.age}, ${newPerson.isAlive ? 'Alive' : 'Dead'}`)
})

// const sleep = () =>
//   new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000)
//   })

// 3rd reaction type: reaction
const reactionDisposer = reaction(
  () => !newPerson.isAlive,
  () => console.log('RIP')
)

runInAction(() => {
  newPerson.name = 'Cesar'
  newPerson.age = 30
})

runInAction(() => {
  newPerson.age = 150
})

runInAction(() => {
  newPerson.name = 'Bob'
})

runInAction(() => {
  newPerson.setAlive(true)
})

runInAction(() => {
  newPerson.setAlive(false)
})

// Dispose to avoid memory leaks
reactionDisposer()
autorunDisposer()

export {}
