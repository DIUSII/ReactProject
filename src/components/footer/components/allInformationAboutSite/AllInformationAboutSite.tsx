import React from 'react';

import logoZakazpodarka from 'assets/image/footer/logoZakazpodarka.svg';

import './AllInformationAboutSite.scss';
import 'assets/sass/mainStyles.scss';

const AllInformationAboutSite = () => {
  return (
    <div className="information-about-site flex_start_between">
      <img src={logoZakazpodarka} alt="logoZakazPodarka"/>
      <div>
        <div>
          <span className="information-about-site__label-phone">
            <span className="information-about-site__label-phone_bold">Отдел продаж </span>
            – круглосуточно
          </span>
          <a href="tel:+78003336501" className="information-about-site__phone">+7 800 333 65 01</a>
        </div>
        <div>
          <span className="information-about-site__label-email">Для корпоративных клиентов</span>
          <a href="mailto:corp@zakazpodarka.ru" className="information-about-site__email">corp@zakazpodarka.ru</a>
        </div>
      </div>
      <div className="information-about-site__content">
        <div>
          <span className="information-about-site__label-phone">
            <span className="information-about-site__label-phone_bold">По остальным вопросам </span>
            – круглосуточно
          </span>
          <a href="tel:+74951203650" className="information-about-site__phone">+7 (495) 120 36 50</a>
        </div>
        <div>
          <span className="information-about-site__label-email">Электронный адрес</span>
          <a href="mailto:info@zakazpodarka.ru" className="information-about-site__email">info@zakazpodarka.ru</a>
        </div>
      </div>
    </div>
  );
};

export default AllInformationAboutSite;