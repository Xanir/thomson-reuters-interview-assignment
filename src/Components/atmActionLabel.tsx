import { observer } from 'mobx-react-lite';

import './atmActionLabel.css'

interface ATMATMActionLabelProps {
  isLeftSide: boolean,
  text: String,
}

function ATMActionLabel({isLeftSide, text}: ATMATMActionLabelProps) {

  return (
    <div className="atm-action">
      {isLeftSide ? <div className="atm-dash" /> : null}
      <span className="atm-action-label">{text}</span>
      {!isLeftSide ? <div className="atm-dash" /> : null}
    </div>
  )
}

export default observer(ATMActionLabel)
