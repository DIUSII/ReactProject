import React from 'react';

import Button from 'components/button/Button';

import epsCard from 'assets/image/epsCardList/epsCard.png';
import longArrow from 'assets/image/epsCardList/longArrow.svg';
import shortArrow from 'assets/image/epsCardList/shortArrow.svg';

import './EpsCardList.scss';
import 'assets/sass/mainStyles.scss';

const EpsCardList = () => {

  const epsList = [
    {
      id: 0,
      image: epsCard,
    },
    {
      id: 1,
      image: epsCard,
    },
    {
      id: 2,
      image: epsCard,
    },
    {
      id: 3,
      image: epsCard,
    },
    {
      id: 4,
      image: epsCard,
    },
    {
      id: 5,
      image: epsCard,
    },
    {
      id: 6,
      image: epsCard,
    },
    {
      id: 7,
      image: epsCard,
    },
    {
      id: 8,
      image: epsCard,
    },{
      id: 9,
      image: epsCard,
    },
    {
      id: 10,
      image: epsCard,
    },
    {
      id: 11,
      image: epsCard,
    },
  ];

  return (
    <div className="eps-card-list">
      <div className="fixed-container">
        <div className="eps-card-list__container">
          <h3 className="eps-card-list__title">
            Обладатель карты сам решает на какой бренд или услугу ее обменять
          </h3>
          <div className="eps-card-list__image-list-container flex_center_flex-start">
            {
              epsList.map((item) => (
                <div className="eps-card-list__image-item-container" key={item.id.toString()}>
                  <img src={item.image} alt={item.image} width="165px" />
                </div>
              ))
            }
          </div>
          <div className="flex_center_between">
            <div className="eps-card-list__space" />
            <Button
              text="Смотреть все"
              borderColor="#f72e6c"
              colorText="#1d1d2d"
              colorImg="#1d1d2d"
            />
            <div className="flex_center_flex-start">
              <img src={longArrow} alt="longArrow" className="eps-card-list__long-arrow"/>
              <img src={shortArrow} alt="shortArrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpsCardList;