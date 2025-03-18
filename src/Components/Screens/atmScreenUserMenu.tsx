import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
  ATMButtons as ATMButtons,
} from '../../Store/appState.ts'

export const ButtonActions: ATMButtons = {
  left: {
    top: null,
    topMiddle: null,
    bottomMiddle: () => {store.setScreen('WITHDRAWL')},
    bottom: () => {store.setScreen('DEPOSIT')},
  },
  right: {
    top: () => null,
    topMiddle: () => {store.setScreen('HOME')},
    bottomMiddle: () => {store.setScreen('BALANCE')},
    bottom: () => {store.setScreen('PIN')},
  },
}

function ATMScreenHome() {

  return (
    <>
      <span>User Menu</span>
      <div className="atm-actions">
        <div className="atm-actions-left">
          <div />
          <div />
          <ATMActionLabel isLeftSide={true} text="Withdrawl"/>
          <ATMActionLabel isLeftSide={true} text="Deposit"/>
        </div>
        <div className="atm-actions-right">
          <div />
          <ATMActionLabel isLeftSide={false} text="Exit"/>
          <ATMActionLabel isLeftSide={false} text="Balance"/>
          <ATMActionLabel isLeftSide={false} text="Re-Enter PIN"/>
        </div>
      </div>
    </>
  )
}

export default ATMScreenHome
