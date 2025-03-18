import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
  CardType as CardType,
} from '../../Store/appState.ts'

function ATMScreenPin() {

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
      bottom: () => {store.setScreen('MENU'); store.setCardType(CardType.STAR)},
    },
  })

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
