import { useState } from 'react'
import './atm.css'
import atmLogo from '/atm_sign.png'
import atmSystemsLogo from '/systems.png'

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
        <div className="atm-interface">
          <div className="atm-left">
            <div className="atm-buttons">
              <button />
              <button />
              <button />
              <button />
            </div>
            <div className="atm-buttons-dash">
              <div className="atm-dash" />
              <div className="atm-dash" />
              <div className="atm-dash" />
              <div className="atm-dash" />
            </div>
          </div>
          <div className="atm-center">
            <div className="atm-screen">
            </div>
            <img className="systemsLogo" src={atmSystemsLogo} alt="systems" />
          </div>
          <div className="atm-right">
            <div className="atm-buttons-dash">
              <div className="atm-dash" />
              <div className="atm-dash" />
              <div className="atm-dash" />
              <div className="atm-dash" />
            </div>
            <div className="atm-buttons">
              <button />
              <button />
              <button />
              <button />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
