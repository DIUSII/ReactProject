import React from 'react';

import './AboutZakazpodarkaItem.scss';

interface IAboutZakazpodarkaItem {
  item: {
    image: string;
    title: string;
    paragraph: string;
  }
}

const AboutZakazpodarkaItem: React.FC<IAboutZakazpodarkaItem> = ({item}) => {
  return (
    <div className="about-zakazpodarka-item">
      <img src={item.image} alt={item.image} className="about-zakazpodarka-item__image"/>
      <h3 className="about-zakazpodarka-item__title">{item.title}</h3>
      <p className="about-zakazpodarka-item__paragraph">{item.paragraph}</p>
    </div>
  );
};

export default AboutZakazpodarkaItem;