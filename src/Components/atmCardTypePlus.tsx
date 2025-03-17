import cardSprites from '/creditcard_sprite.png'

interface CardIcon {
  active: boolean;
}

function Icon({active}: CardIcon) {
  const size = 28;
  const offset = 172;
  const spriteActivity = active ? 'top' : 'bottom'

  const style = {
    backgroundImage: `url(${cardSprites})`,
    backgroundPosition: `${spriteActivity} left -${offset}px`,
    width: `${size}px`,
    height: '20px',
  };

  return <div style={style}></div>
}

export default Icon
