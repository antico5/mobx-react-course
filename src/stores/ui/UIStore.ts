import RootStore from '../RootStore'
import GlobalViewStore from './GlobalViewStore'

export default class UIStore {
  globalViewStore: GlobalViewStore

  constructor (private rootStore: RootStore) {
    this.globalViewStore = new GlobalViewStore(rootStore)
  }
}
