import React, { useState } from 'react';

import users from 'assets/image/navbar/users.svg';
import orders from 'assets/image/navbar/orders.svg';
import hamburger from 'assets/image/navbar/hamburger.svg';
import whiteArrow from 'assets/image/whiteArrow.svg';

import './NavBar.scss';
import 'assets/sass/mainStyles.scss';

interface IActiveMenu {
  id: number,
  active: boolean,
}

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<IActiveMenu[]>([
    {id: 0, active: false},
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
  ]);

  const changeActiveInMenu = async (index: number) => {
    let newActiveMenu: IActiveMenu[];

    if (activeMenu[index].active === false) {
      newActiveMenu = [
        {id: 0, active: false},
        {id: 1, active: false},
        {id: 2, active: false},
        {id: 3, active: false},
      ];

      newActiveMenu = [
        ...newActiveMenu.slice(0, index),
        {id: index, active: true},
        ...newActiveMenu.slice(index + 1),
      ];
    } else {
      newActiveMenu = [
        ...activeMenu.slice(0, index),
        {id: index, active: false},
        ...activeMenu.slice(index + 1),
      ];
    }

    setActiveMenu(newActiveMenu);
  };

  return (
    <div className="nav-bar">
      <div className="fixed-container flex_center_between">
        <div className="flex_center_flex-start">
          <img src={hamburger} alt="hamburger" className="nav-bar__hamburger" />
          <ul className="nav-bar__list flex_center_flex-start">
            <li className={`nav-bar__item flex_center_flex-start ${activeMenu[0].active && 'nav-bar__item_active'}`} onClick={() => changeActiveInMenu(0)}>
              <span className={`nav-bar__item-text ${activeMenu[0].active && 'nav-bar__item-text_active'}`}>
                Для бизнеса
              </span>
              <img
                src={whiteArrow}
                alt="whiteArrow"
                className={`nav-bar__image ${activeMenu[0].active && 'nav-bar__image_active'}`}
              />
            </li>
            <li className={`nav-bar__item flex_center_flex-start ${activeMenu[1].active && 'nav-bar__item_active'}`} onClick={() => changeActiveInMenu(1)}>
              <span className={`nav-bar__item-text ${activeMenu[1].active && 'nav-bar__item-text_active'}`}>
                Частным лицам
              </span>
              <img
                src={whiteArrow}
                alt="whiteArrow"
                className={`nav-bar__image ${activeMenu[1].active && 'nav-bar__image_active'}`}
              />
            </li>
            <li className={`nav-bar__item flex_center_flex-start ${activeMenu[2].active && 'nav-bar__item_active'}`} onClick={() => changeActiveInMenu(2)}>
              <span className={`nav-bar__item-text ${activeMenu[2].active && 'nav-bar__item-text_active'}`}>
                Активация карты
              </span>
            </li>
            <li className={`nav-bar__item flex_center_flex-start ${activeMenu[3].active && 'nav-bar__item_active'}`} onClick={() => changeActiveInMenu(3)}>
              <span className={`nav-bar__item-text ${activeMenu[3].active && 'nav-bar__item-text_active'}`}>
                Компания
              </span>
            </li>
          </ul>
        </div>
        <div className="flex_center_flex-start">
          <div className="nav-bar__container-link-to flex_center_flex-start">
            <img src={users} alt="users" width={24} />
            <span className="nav-bar__text-link-to">Войти</span>
          </div>
          <div className="nav-bar__container-link-to flex_center_flex-start">
            <img src={orders} alt="orders" width={24} />
            <span className="nav-bar__text-link-to">Корзина</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;