import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import './atmScreens.css'
import {
  default as store,
  ATMButtons as ATMButtons,
} from '../../Store/appState.ts'

function ATMScreenWithdrawl() {

  store.setButtons({
    left: {
      top: () => {store.withdrawl(10); store.setScreen('MENU')},
      topMiddle: () => {store.withdrawl(20); store.setScreen('MENU')},
      bottomMiddle: () => {store.withdrawl(50); store.setScreen('MENU')},
      bottom: () => {store.withdrawl(100); store.setScreen('MENU')},
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
      <div className="atm-message">Withdrawl</div>
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

export default ATMScreenWithdrawl
