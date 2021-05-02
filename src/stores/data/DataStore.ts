import RootStore from '../RootStore'
import TodoStore from './TodoStore'
import UserStore from './UserStore'

export default class DataStore {
  userStore: UserStore;
  todoStore: TodoStore;

  constructor (private rootStore: RootStore) {
    this.userStore = new UserStore(rootStore)
    this.todoStore = new TodoStore(rootStore)
  }
}
