import React from 'react';

import AboutZakazpodarkaItem from './components/aboutZakazpodarkaItem/AboutZakazpodarkaItem';

import clock from 'assets/image/aboutZakazpodarka/clock.svg';
import iPhone from 'assets/image/aboutZakazpodarka/iPhone.svg';
import square from 'assets/image/aboutZakazpodarka/square.svg';
import prizes from 'assets/image/aboutZakazpodarka/prizes.png';
import rotateLeft from 'assets/image/aboutZakazpodarka/rotateLeft.svg';

import './AboutZakazpodarka.scss';
import 'assets/sass/mainStyles.scss';

const AboutZakazpodarka = () => {
  const fourAdvantage = [
    {
      id: 0,
      image: iPhone,
      title: 'Быстрая доставка',
      paragraph: 'Отправляем электронный сертификат на почту сразу после оплаты, получателю присылаем уведомление о подарке.',
    },
    {
      id: 1,
      image: rotateLeft,
      title: 'Удобная активация',
      paragraph: 'После активации карту можно обменять на любой сертификат, а остаток средств – вывести на мобильный телефон или банковскую карту.',
    },
    {
      id: 2,
      image: square,
      title: 'Большой выбор',
      paragraph: 'У нас доступны подарочные сертификаты любым номиналом от самых популярных брендов. И никаких комиссий за обмен!',
    },
    {
      id: 3,
      image: clock,
      title: 'Срок действия',
      paragraph: 'Вам не придется спешить с покупкой подарков – использовать сертификат можно в течение 6 месяцев!',
    },
  ];

  return (
    <div className="about-zakazpodarka">
      <div className="fixed-container">
        <div className="flex_start_between">
          <div className="flex_center_between about-zakazpodarka__four-advantage">
            {fourAdvantage.map((item) => <AboutZakazpodarkaItem item={item} key={item.id.toString()} />)}
          </div>
          <div className="about-zakazpodarka__needed-prizes">
            <img src={prizes} alt="prizes" className="about-zakazpodarka__needed-prizes-image"/>
            <div className="about-zakazpodarka__needed-prizes-content">
              <h3 className="about-zakazpodarka__needed-prizes-title">Нужный подарок</h3>
              <p className="about-zakazpodarka__needed-prizes-paragraph">
                Универсальный подарок, который понравится каждому! Подарочные карты с уникальным дизайном и любым номиналом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutZakazpodarka;