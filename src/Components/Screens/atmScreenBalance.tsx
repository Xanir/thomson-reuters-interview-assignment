import { observer } from 'mobx-react-lite';

import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
  ATMButtons as ATMButtons,
} from '../../Store/appState.ts'

function ATMScreenBalance() {
  store.setButtons({
    left: {
      top: null,
      topMiddle: null,
      bottomMiddle: null,
      bottom: null,
    },
    right: {
      top: () => {store.setScreen('DEPOSIT')},
      topMiddle: () => {store.setScreen('WITHDRAWL')},
      bottomMiddle: null,
      bottom: () => {store.setScreen('MENU')},
    },
  })

  return (
    <>
      <div className="atm-message">
        <div>Balance</div>
        <div>${store.balance}</div>
      </div>

      <div className="atm-actions">
        <div className="atm-actions-left">
          <div />
          <div />
          <div />
          <div />
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

export default observer(ATMScreenBalance)
