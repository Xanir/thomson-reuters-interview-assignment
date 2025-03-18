import { makeObservable, observable, action, computed } from 'mobx';
import {
  Screens as Screens,
  ScreenType as ScreenType
} from '../Components/Screens/Screens.ts'


export interface ATMButtonsGroup {
  top: Function | null,
  topMiddle: Function | null,
  bottomMiddle: Function | null,
  bottom: Function | null,
}
export interface ATMButtons {
  left: ATMButtonsGroup,
  right: ATMButtonsGroup,
}

export const CardType = {
  STAR: 'Star',
  PULSE: 'Pulse',
  MAESTRA: 'Maestra',
  MASTERCARD: 'MasterCard',
  PLUS: 'Plus',
  VISA: 'Visa'
};
type CardTypeV = typeof CardType[keyof typeof CardType] | null;

class AppStore {
  constructor() {
    makeObservable(this, {
      balance: observable,
      screen: observable,
      screenElem: computed,
      setScreen: action,
      setButtons: action,
      deposit: action,
      withdrawl: action,
      cardType: observable,
    });
  }
  cardType: CardTypeV = null;
  balance: number = 10;
  screen: ScreenType = 'HOME';
  buttons: ATMButtons | null = null;

  get screenElem() {
    return Screens[this.screen]
  }

  setScreen(screen: ScreenType) {
    this.screen = screen;
  }

  setButtons(buttons: ATMButtons) {
    this.buttons = buttons;
  }

  deposit(val: number) {
    this.balance = this.balance + val;
  }

  withdrawl(val : number) {
    this.balance = this.balance - val;
  }

}

// 5. Create an Instance of the Store
const store = new AppStore();

export default store;