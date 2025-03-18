import { ChangeEvent, useState } from 'react';

import ATMActionLabel from '../atmActionLabel.tsx'
import './atmScreens.css'

import {
  default as store,
  CardType as CardType,
} from '../../Store/appState.ts'

function ATMScreenPin() {
  const [pinValue, setPinValue] = useState<number>();
  const [isPinInvalid, setPinInvalid] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    setPinValue(+numericValue);
  };

  store.setButtons({
    left: {
      top: null,
      topMiddle: null,
      bottomMiddle: null,
      bottom: () => {
        store.setScreen('HOME');
      },
    },
    right: {
      top: null,
      topMiddle: null,
      bottomMiddle: null,
      bottom: () => {
        if (!pinValue) {
          setPinInvalid(true);
          return;
        }
        switch (+pinValue) {
          case 1111:
            store.setCardType(CardType.STAR);
            store.setScreen('MENU');
            break
          case 2222:
            store.setCardType(CardType.PULSE);
            store.setScreen('MENU');
            break
          case 3333:
            store.setCardType(CardType.MAESTRA);
            store.setScreen('MENU');
            break
          case 4444:
            store.setCardType(CardType.MASTERCARD);
            store.setScreen('MENU');
            break
          case 5555:
            store.setCardType(CardType.PLUS);
            store.setScreen('MENU');
            break
          case 6666:
            store.setCardType(CardType.VISA);
            store.setScreen('MENU');
            break
          default:
            setPinInvalid(true);
        }
      },
    },
  })

  return (
    <>
      <div className="atm-message">
        <div>Enter PIN</div>
        <input className="atm-pin-input" type="password" onChange={handleChange} value={pinValue}></input>
        {isPinInvalid ? <div className="atm-pin-invalid">Invalid PIN</div> : null}
      </div>
      <div className="atm-actions">
        <div className="atm-actions-left">
          <div />
          <div />
          <div />
          <ATMActionLabel isLeftSide={true} text="Exit"/>
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
