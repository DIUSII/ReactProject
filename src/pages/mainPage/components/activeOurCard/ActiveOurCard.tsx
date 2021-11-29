import React from 'react';

import Button from 'components/button/Button';

import twoCardsZakapodarka from 'assets/image/activeOurCard/twoCardsZakapodarka.png';

import './ActiveOurCard.scss';
import 'assets/sass/mainStyles.scss';

const ActiveOurCard = () => {
  return (
    <div className="active-our-card">
      <div className="fixed-container">
        <div className="active-our-card__container flex_center_between">
          <img
            src={twoCardsZakapodarka}
            alt="twoCardsZakapodarka"
            width="397px"
            className="active-our-card__image"/>
          <div className="active-our-card__content">
            <h3 className="active-our-card__title">Активируйте вашу карту</h3>
            <p className="active-our-card__paragraph">
              Карта с огромными возможностями, активируй и получи доступ к популярным магазинам,
              известных брендов, торговых сетей, ресторанов.
              Здесь вы найдете подарок для родных, друзей и коллег на любое событие.
            </p>
            <div className="flex_center_flex-start">
              <Button text="Активировать карту" backgroundColor="#f72e6c"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOurCard;