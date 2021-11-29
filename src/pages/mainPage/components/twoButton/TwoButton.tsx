import React from 'react';

import arrow from 'assets/image/twoButton/arrow.svg';

import './TwoButton.scss';
import 'assets/sass/mainStyles.scss';

const TwoButton = () => {
  return (
    <div className="two-button flex_center_flex-start">
      <div className="two-button__container flex_center_center">
        <img src={arrow} alt="arrow"  className="two-button__image"/>
        <span className="two-button__text">Для бизнеса</span>
      </div>
      <div className="two-button__container two-button__container_active flex_center_center">
        <span className="two-button__text">О компании</span>
        <img src={arrow} alt="arrow"  className="two-button__image two-button__image_rotate" />
      </div>
    </div>
  );
};

export default TwoButton;