import React from 'react';

import arrow from 'assets/image/buyEps/arrow.svg';

import './BuyEps.scss';
import 'assets/sass/mainStyles.scss';

const BuyEps = () => {

  return (
    <div className="buy-eps" id="buy-eps">
      <div className="fixed-container">
        <div className="buy-eps__container flex_start_between">
          <div className="buy-eps__content">
            <h2 className="buy-eps__title">Купить подарочную карту онлайн</h2>
            <p className="buy-eps__sub-paragraph">
              Всего несколько минут потребуется, чтобы заказать подарочный сертификат!
              Вы сами можете выбрать значимое событие и уникальный дизайн карты.
            </p>
            <div className="flex_center_flex-start buy-eps__more-details-container">
              <span className="buy-eps__more-details">Подробнее</span>
              <img src={arrow} alt="arrow" className="buy-eps__more-details-img"/>
            </div>
            <p className="buy-eps__paragraph">
              Можно выбрать одну или несколько подарочных карт.
              Подберите нужную категорию, заполните необходимые данные,
              укажите номинал и количество сертификатов, после чего оплатите подарок.
            </p>
            <div className="buy-eps__filter-container" />
          </div>
          <div className="buy-eps__buy-prizes-card" />
        </div>
      </div>
    </div>
  );
};

export default BuyEps;