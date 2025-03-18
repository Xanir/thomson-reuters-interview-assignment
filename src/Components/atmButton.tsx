import './atmButton.css'

interface ATMButtonProps {
  isLeftSide: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

function ATMButton({isLeftSide, onClick}: ATMButtonProps) {

  return (
    <>
      <div className="atm-button-wrapper">
        {!isLeftSide ? <div className="atm-dash" /> : null}
        <button className="atm-button" onClick={onClick}/>
        {isLeftSide ? <div className="atm-dash" /> : null}
      </div>

    </>
  )
}

export default ATMButton
