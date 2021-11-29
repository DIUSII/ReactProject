import React from 'react';

import './PersAndRulesAtSite.scss';
import 'assets/sass/mainStyles.scss';

const PersAndRulesAtSite = () => {
  return (
    <div className="pers-and-rules">
      <p className="pers-and-rules__text pers-and-rules__text_margin pers-and-rules__text_max-width">
        Группы Компаний «Маркетинг Солюшнс», в которую входят следующие юридические лица: ООО «Лоялти Сервис»,
        ООО «Интерсеть», ООО «Сити Маркетинг». Просьба запросы по иным юридическим лицам на почту не отправлять!
      </p>
      <div className="flex_end_between">
        <div>
          <span className="pers-and-rules__text">© 2015-2021 Zakazpodarka.ru</span>
          <span className="pers-and-rules__text">Все права защищены.</span>
        </div>
        <span className="pers-and-rules__text pers-and-rules__text_underline">
          Политика обработки персональных данных
        </span>
        <div className="pers-and-rules__space"></div>
      </div>
    </div>
  );
};

export default PersAndRulesAtSite;