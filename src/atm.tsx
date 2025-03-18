import { observer } from 'mobx-react-lite';

import './atm.css'
import atmLogo from '/atm_sign.png'
import atmSystemsLogo from '/systems.png'

import {
  default as store,
  CardType as CardType
} from './Store/appState.ts'

import ATMButton from './Components/ATMButton.tsx'
import ATMCardTypeMaestra from './Components/atmCardTypeMaestra.tsx'
import ATMCardTypeMasterCard from './Components/atmCardTypeMasterCard.tsx'
import ATMCardTypePlus from './Components/atmCardTypePlus.tsx'
import ATMCardTypePulse from './Components/atmCardTypePulse.tsx'
import ATMCardTypeStar from './Components/atmCardTypeStar.tsx'
import ATMCardTypeVisa from './Components/atmCardTypeVisa.tsx'

function App() {

  function clickLeftTopButton() {
    if (store?.buttons?.left?.top) {
      store.buttons.left.top()
    }
  }

  function clickLeftTopMiddleButton() {
    if (store?.buttons?.left?.topMiddle) {
      store?.buttons?.left?.topMiddle()
    }
  }

  function clickLeftBottomMiddleButton() {
    if (store?.buttons?.left?.bottomMiddle) {
      store?.buttons?.left?.bottomMiddle()
    }
  }

  function clickLeftBottomButton() {
    if (store?.buttons?.left?.bottom) {
      store?.buttons?.left?.bottom()
    }
  }

  function clickRightTopButton() {
    if (store?.buttons?.right?.top) {
      store?.buttons?.right?.top()
    }
  }

  function clickRightTopMiddleButton() {
    if (store?.buttons?.right?.topMiddle) {
      store?.buttons?.right?.topMiddle()
    }
  }

  function clickRightBottomMiddleButton() {
    if (store?.buttons?.right?.bottomMiddle) {
      store?.buttons?.right?.bottomMiddle()
    }
  }

  function clickRightBottomButton() {
    if (store?.buttons?.right?.bottom) {
      store?.buttons?.right?.bottom()
    }
  }

  return (
    <div className="atm">
      <div className="atm-header">
        <img src={atmLogo} alt="ATM logo" />
      </div>
      <div className="atm-body">
        <div className="atm-cards">
          <ATMCardTypeStar active={store.cardType == CardType.STAR}/>
          <ATMCardTypePulse active={store.cardType == CardType.PULSE}/>
          <ATMCardTypeMaestra active={store.cardType == CardType.MAESTRA}/>
          <ATMCardTypeMasterCard active={store.cardType == CardType.MASTERCARD}/>
          <ATMCardTypePlus active={store.cardType == CardType.PLUS}/>
          <ATMCardTypeVisa active={store.cardType == CardType.VISA}/>
        </div>
        <div className="atm-interface">
          <div className="atm-buttons">
            <ATMButton onClick={clickLeftTopButton} isLeftSide={true} />
            <ATMButton onClick={clickLeftTopMiddleButton} isLeftSide={true} />
            <ATMButton onClick={clickLeftBottomMiddleButton} isLeftSide={true} />
            <ATMButton onClick={clickLeftBottomButton} isLeftSide={true} />
          </div>
          <div className="atm-center">
            <div className="atm-screen">
              <store.screenElem />
            </div>
            <img className="systemsLogo" src={atmSystemsLogo} alt="systems" />
          </div>
          <div className="atm-buttons">
            <ATMButton onClick={clickRightTopButton} isLeftSide={false} />
            <ATMButton onClick={clickRightTopMiddleButton} isLeftSide={false} />
            <ATMButton onClick={clickRightBottomMiddleButton} isLeftSide={false} />
            <ATMButton onClick={clickRightBottomButton} isLeftSide={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(App)
