import React from 'react';

import whiteArrow from 'assets/image/whiteArrow.svg';
import blackArrow from 'assets/image/blackArrow.svg';

import './Button.scss';

interface IButton {
  text: string;
  colorText?: string;
  colorImg?: string;
  borderColor?: string;
  marginRight?: number;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  text,
  colorText = '#fff',
  colorImg = '#fff',
  borderColor,
  marginRight = 0,
  backgroundColor = 'transparent',
}) => {
  const buttonContainer = {
    border: borderColor ? `0.75px solid ${borderColor}` : 'none',
    backgroundColor: backgroundColor,
    marginRight: marginRight,
  };

  const textStyle = {
    color: colorText,
  };

  const imgStyle = {
    transform: colorImg === '#fff' ? 'rotate(-90deg)' : '',
  };

  return (
    <div style={buttonContainer} className="button flex_center_flex-start">
      <span style={textStyle} className="button__text">{text}</span>
      <img
        src={colorImg === '#fff' ? whiteArrow : blackArrow}
        style={imgStyle}
        alt="whiteArrow"
        className={'button__arrow'}
      />
    </div>
  );
};

export default Button;