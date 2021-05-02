import { observable } from 'mobx'
import RootStore from '../RootStore'

export default class GlobalViewStore {
  @observable
  theme = 'dark'

  constructor (private rootStore: RootStore) {
    console.log(rootStore.dataStore.todoStore.todos.length)
  }
}
