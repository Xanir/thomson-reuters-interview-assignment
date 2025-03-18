import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
} from '../../Store/appState.ts'

function ATMScreenDeposit() {
  store.setButtons({
    left: {
      top: () => {store.deposit(10);store.setScreen('MENU')},
      topMiddle: () => {store.deposit(20);store.setScreen('MENU')},
      bottomMiddle: () => {store.deposit(50);store.setScreen('MENU')},
      bottom: () => {store.deposit(100);store.setScreen('MENU')},
    },
    right: {
      top: null,
      topMiddle: null,
      bottomMiddle: null,
      bottom: () => {store.setScreen('MENU')},
    },
  })

  return (
    <>
      <div className="atm-message">Deposit</div>
      <div className="atm-actions">
        <div className="atm-actions-left">
          <ATMActionLabel isLeftSide={true} text="$10"/>
          <ATMActionLabel isLeftSide={true} text="$20"/>
          <ATMActionLabel isLeftSide={true} text="$50"/>
          <ATMActionLabel isLeftSide={true} text="$100"/>
        </div>
        <div className="atm-actions-right">
          <div />
          <div />
          <div />
          <ATMActionLabel isLeftSide={false} text="Back"/>
        </div>
      </div>
    </>
  )
}

export default ATMScreenDeposit
