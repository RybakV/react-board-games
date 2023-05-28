import { action, makeObservable, observable } from 'mobx';

export class BackgroundStore {
  backgroundUrl = '/img/bg-home.jpg';

  constructor() {
    makeObservable(this,{
      backgroundUrl: observable,
      setBackgroundUrl: action,
    })
  }

  setBackgroundUrl(imageUrl){
    this.backgroundUrl = imageUrl;
  }
}