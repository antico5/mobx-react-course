import { action, autorun, makeObservable, observable, runInAction } from "mobx"

class cPerson {
  @observable name: string
  @observable age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
    makeObservable(this)
  }

  // 1st way: action function (not batched)
  @action updateName(name: string){
    this.name = name
  }
}

const newPerson = new cPerson('Armando', 29)

autorun(()=>{
  console.log(`Person: ${newPerson.name}, ${newPerson.age}`)
})

newPerson.updateName('Dylan')

// 2nd way: runInAction (batched)
runInAction(()=>{
  newPerson.age=30
  newPerson.name='Cesar'
})

// 3rd way: action function (not batched)

const nameUpdater = action(()=> {
  newPerson.name = 'Rob'
})

nameUpdater()

export {}