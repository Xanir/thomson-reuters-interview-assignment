import { useState } from 'react'
import './atm.css'
import atmLogo from '/atm_sign.png'
import ATMCardTypeMaestra from './Components/atmCardTypeMaestra.tsx'
import ATMCardTypeMasterCard from './Components/atmCardTypeMasterCard.tsx'
import ATMCardTypePlus from './Components/atmCardTypePlus.tsx'
import ATMCardTypePulse from './Components/atmCardTypePulse.tsx'
import ATMCardTypeStar from './Components/atmCardTypeStar.tsx'
import ATMCardTypeVisa from './Components/atmCardTypeVisa.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="atm">
      <div className="atm-header">
        <img src={atmLogo} alt="ATM logo" />
      </div>
      <div className="atm-body">
        <div className="atm-cards">
          <ATMCardTypeStar active={false}/>
          <ATMCardTypePulse active={false}/>
          <ATMCardTypeMaestra active={false}/>
          <ATMCardTypeMasterCard active={false}/>
          <ATMCardTypePlus active={false}/>
          <ATMCardTypeVisa active={false}/>
        </div>
        <div className="atm-buttons">
        </div>
      </div>
    </div>
  )
}

export default App
