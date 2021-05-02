import DataStore from './data/DataStore'
import UIStore from './ui/UIStore'

export default class RootStore {
  dataStore: DataStore;
  uiStore: UIStore;

  constructor () {
    this.dataStore = new DataStore(this)
    this.uiStore = new UIStore(this)
  }
}
