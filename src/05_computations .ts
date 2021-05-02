import { action, autorun, computed, makeObservable, observable, runInAction, when } from 'mobx'

class Person {
  @observable name = ''
  @observable age = 0
  @observable isAlive: boolean = true
  @observable dollars = 10

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

  @computed get isRich () {
    console.log('Calculating rich')
    return this.dollars >= 1000
  }
}

const newPerson = new Person({ name: 'Armando', age: 29 })

// 1st reaction type: autorun
const autorunDisposer = autorun(() => {
  console.log(`Person: ${newPerson.name}, ${newPerson.age}, ${newPerson.isAlive ? 'Alive' : 'Dead'}. Rich: ${newPerson.isRich}`)
  console.log(`Person: ${newPerson.name}, ${newPerson.age}, ${newPerson.isAlive ? 'Alive' : 'Dead'}. Rich: ${newPerson.isRich}`) // isRich is calculated only once
})

runInAction(() => {
  newPerson.dollars = 2000
})

// const sleep = () =>
//   new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000)
//   })

// Dispose to avoid memory leaks
autorunDisposer()

export {}
