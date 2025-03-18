import { observer } from 'mobx-react-lite';

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
    bottomMiddle: null,
    bottom: null,
  },
  right: {
    top: () => {store.setScreen('DEPOSIT')},
    topMiddle: () => {store.setScreen('WITHDRAWL')},
    bottomMiddle: null,
    bottom: () => {store.setScreen('MENU')},
  },
}

function ATMScreenBalance() {

  return (
    <>
      <span>Balance</span>
      <span>{store.balance}</span>
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
