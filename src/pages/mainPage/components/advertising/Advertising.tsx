import React from 'react';

import fourCardZakazpodarka from 'assets/image/advertising/fourCardZakazpodarka.png';

import Button from 'components/button/Button';

import './Advertising.scss';
import 'assets/sass/mainStyles.scss';

const Advertising = () => {
  return (
    <div className="advertising">
      <div className="fixed-container">
        <div className="advertising__container flex_center_between">
          <div className="advertising__text-container">
            <h2 className="advertising__title">Скидки до 80%!</h2>
            <h3 className="advertising__subtitle">Действуют с 12 по 21 декабря 2022</h3>
            <p className="advertising__paragraph">Приобретайте сертификаты без привязки к конкретному магазину или сервису и получайте выгодную скидку!</p>
            <div className="flex_center_flex-start">
              <Button text="Купить сейчас" backgroundColor="#f72e6c" />
            </div>
          </div>
          <img src={fourCardZakazpodarka} alt="fourCardZakazpodarka" width="527px"/>
        </div>
      </div>
    </div>
  );
};

export default Advertising;