import { makeObservable, observable } from 'mobx'
import RootStore from '../RootStore'

class User {}

export default class UserStore {
  @observable
  users: User[] = []

  constructor (public rootStore: RootStore) {
    makeObservable(this)
  }
}
