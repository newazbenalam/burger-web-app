import { burgers } from './components/data';

const burgerWarpper = document.querySelector("")

class app {
  constructor() {
    this._getBurgerData();

  }

  _getBurgerData() {
    burgers.forEach((burger) => 
      this._renderBurger(burger)
    );
  }

  _renderBurger(burger){

  }

  _orderhandler(){

  }

}

const myApp = new app();