import { makeObservable, observable } from 'mobx'
import RootStore from '../RootStore'

class Todo {}

export default class TodoStore {
  @observable
  todos: Todo[] = []

  constructor (public rootStore: RootStore) {
    makeObservable(this)
  }
}
