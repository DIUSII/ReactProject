import React from 'react';

import logoSistemaPromo from 'assets/image/header/logoSistemaPromo.svg';
import logoZakazPodarka from 'assets/image/header/logoZakazPodarka.svg';

import './HeaderInfo.scss';
import 'assets/sass/mainStyles.scss';

const HeaderInfo = () => {
  return (
    <div className="header-info">
      <div className="fixed-container flex_center_between">
        <div className="header-info__image-container flex_center_flex-start">
          <img src={logoSistemaPromo} alt="logoSistemaPromo" className="header-info__logo-sistema-promo"/>
          <img src={logoZakazPodarka} alt="logoZakazPodarka" />
        </div>
        <div className="header-info__phones-container flex_center_flex-start">
          <div className="header-info__department-sales">
            <div>
              <span className="header-info__label">Отдел продаж – </span>
              <span className="header-info__text">круглосуточно</span>
            </div>
            <a href="tel:+78003336501" className="header-info__phone">+7 800 333-65-01</a>
          </div>
          <div>
            <div>
              <span className="header-info__label">По другим вопросам – </span>
              <span className="header-info__text">круглосуточно</span>
            </div>
            <a href="tel:+74951203650" className="header-info__phone">+7 (495) 120-36-50</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;