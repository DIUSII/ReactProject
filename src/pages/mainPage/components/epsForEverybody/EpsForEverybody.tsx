import React from 'react';

import Button from 'components/button/Button';

import './EpsForEverybody.scss';
import 'assets/sass/mainStyles.scss';

const EpsForEverybody = () => {
  return (
    <div className="eps-for-everybody flex_center_end">
      <div className="eps-for-everybody__container">
        <h3 className="eps-for-everybody__title">Универсальные подарочные карты<span> подойдут каждому!</span></h3>
        <p className="eps-for-everybody__paragraph">
          Доступны индивидуальные и корпоративные сертификаты с любым номиналом и дизайном.
        </p>
        <p className="eps-for-everybody__sub-paragraph">
          Дарите выгодные подарки своим друзьям, близким и коллегам – пусть они купят то, о чем давно мечтали!
        </p>
        <div className="flex_center_flex-start">
          <Button text="Купить карту" backgroundColor="#f72e6c" />
        </div>
      </div>
    </div>
  );
};

export default EpsForEverybody;