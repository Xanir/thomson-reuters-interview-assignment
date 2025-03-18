import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
} from '../../Store/appState.ts'

function ATMScreenHome() {
  store.setButtons({
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
  })

  return (
    <>
      <div className="atm-message">Welcome to the ATM</div>
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
