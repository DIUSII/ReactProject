import React from 'react';

import Button from 'components/button/Button';

import eye from 'assets/image/informationAboutEps/eye.svg';
import twoCardZakazpodarka from 'assets/image/informationAboutEps/twoCardZakazpodarka.png';

import './InformationAboutEps.scss';
import 'assets/sass/mainStyles.scss';

const InformationAboutEps = () => {
  return (
    <div className="information-about-eps">
      <div className="fixed-container">
        <div className="information-about-eps__container flex_center_between">
          <img src={twoCardZakazpodarka} alt="twoCardZakazpodarka" width="388px" />
          <div className="information-about-eps__content">
            <h1 className="information-about-eps__title">Универсальные подарочные карты</h1>
            <h2 className="information-about-eps__subtitle">Один сертификат = 100 известных брендов!</h2>
            <p className="information-about-eps__paragraph">
              Не знаете, что подарить близкому человеку? Универсальная подарочная карта – идеальный выбор!
              Вы дарите единый сертификат, а получатель сам выбирает на что его потратить.
            </p>
            <div className="information-about-eps__eye-container flex_center_flex-start">
              <img src={eye} alt="eye" className="information-about-eps__eye-img" />
              <span className="information-about-eps__get-test-card">Получить тестовую карту</span>
            </div>
            <div className="flex_center_flex-start">
              <Button text="Купить сейчас" borderColor="#fff" marginRight={6} />
              <Button text="Купить в подарок" borderColor="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationAboutEps;