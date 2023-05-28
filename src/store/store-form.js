import { action, makeObservable, observable } from 'mobx';

export class FormStore {
  showForm = 'hidden';

  constructor() {
    makeObservable(this,{
      showForm: observable,
      setFormVisible: action,
      setFormHidden: action,
    })
  }

  setFormVisible(){
    this.showForm = 'visible';
  }
  setFormHidden(){
    this.showForm = 'hidden';
  }
}