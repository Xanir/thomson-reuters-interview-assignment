import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
  ATMButtons as ATMButtons,
  CardType as CardType,
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
    bottom: () => {store.setScreen('MENU'); store.setCardType(CardType.STAR)},
  },
}

function ATMScreenPin() {

  return (
    <>
      <span>Enter PIN</span>
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
          <ATMActionLabel isLeftSide={false} text="Enter"/>
        </div>
      </div>
    </>
  )
}

export default ATMScreenPin
