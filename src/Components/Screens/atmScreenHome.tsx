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
    top: null,
    topMiddle: null,
    bottomMiddle: null,
    bottom: () => {store.setScreen('PIN')},
  },
}

function ATMScreenHome() {
  return (
    <>
      <span>Welcome to the ATM</span>
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
          <ATMActionLabel isLeftSide={false} text="Enter PIN"/>
        </div>
      </div>
    </>
  )
}

export default ATMScreenHome
