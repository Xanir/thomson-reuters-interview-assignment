import { makeObservable, observable, action, computed, reaction } from 'mobx';
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
      cardType: observable,
      setScreen: action,
      setButtons: action,
      setCardType: action,
      deposit: action,
      withdrawl: action,
    });
    this.loadFromLocalStorage();

    // Automatically save to localStorage whenever the todos array changes
    reaction(
        () => this.balance,
        balance => {
            localStorage.setItem('balance', JSON.stringify(balance));
        }
    );
  }
  cardType: CardTypeV = null;
  balance: number = 10;
  screen: ScreenType = 'HOME';
  buttons: ATMButtons | null = null;

  get screenElem() {
    return Screens[this.screen]
  }

  setScreen(screen: ScreenType) {
    if (screen === 'HOME') {this.setCardType(null)}
    this.screen = screen;
  }

  setButtons(buttons: ATMButtons) {
    this.buttons = buttons;
  }

  setCardType(cardType: CardTypeV) {
    this.cardType = cardType;
  }

  deposit(val: number) {
    this.balance = this.balance + val;
  }

  withdrawl(val : number) {
    this.balance = this.balance - val;
  }

  loadFromLocalStorage() {
    const balance = localStorage.getItem('balance');
    if (balance) {
        this.balance = JSON.parse(balance);
    }
  }
}

// 5. Create an Instance of the Store
const store = new AppStore();

export default store;