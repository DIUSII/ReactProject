import React from 'react';

import './LinkByAllSite.scss';
import 'assets/sass/mainStyles.scss';

const LinkByAllSite = () => {
  return (
    <div className="link-all-site flex_start_between">
      <div className="link-all-site__business-container">
        <h3 className="link-all-site__title">Для бизнеса</h3>
        <div className="flex_start_between">
          <div>
            <h4 className="link-all-site__subtitle">Для HR</h4>
            <ul className="link-all-site__list">
              <li className="link-all-site__item">УПК для юридических лиц</li>
              <li className="link-all-site__item">Банковские карты</li>
              <li className="link-all-site__item">Активация ЕКО</li>
            </ul>
          </div>
          <div>
            <h4 className="link-all-site__subtitle"> маркетинг и трейд-маркетологу</h4>
            <ul className="link-all-site__list">
              <li className="link-all-site__item">УПК для юридических лиц</li>
              <li className="link-all-site__item">Банковские карты</li>
              <li className="link-all-site__item">Активации ЕКО</li>
              <li className="link-all-site__item">Система Промо</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3 className="link-all-site__title">Частным лицам</h3>
        <ul className="link-all-site__list link-all-site__list_margin-for-private-persons">
          <li className="link-all-site__item">Универсальная карта</li>
          <li className="link-all-site__item">Каталог сертификатов</li>
        </ul>
        <h3 className="link-all-site__title link-all-site__title_margin-for-active-card">Активация карты</h3>
        <h3 className="link-all-site__title link-all-site__title_margin-for-company">Компания</h3>
      </div>
      <div className="link-all-site__contact-container">
        <h3 className="link-all-site__title">Контакты</h3>
        <ul className="link-all-site__list">
          <li className="link-all-site__item">Москва</li>
          <li className="link-all-site__item">Тверь</li>
        </ul>
      </div>
    </div>
  );
};

export default LinkByAllSite;