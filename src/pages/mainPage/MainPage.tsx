import React from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import NavBar from 'components/navBar/NavBar';

import BuyEps from './components/buyEps/BuyEps';
import TwoButton from './components/twoButton/TwoButton';
import Advertising from './components/advertising/Advertising';
import EpsCardList from './components/epsCardList/EpsCardList';
import ActiveOurCard from './components/activeOurCard/ActiveOurCard';
import EpsForEverybody from './components/epsForEverybody/EpsForEverybody';
import AboutZakazpodarka from './components/aboutZakazpodarka/AboutZakazpodarka';
import InformationAboutEps from './components/informationAboutEps/InformationAboutEps';

import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__background">
        <NavBar />
        <InformationAboutEps />
      </div>
      <AboutZakazpodarka />
      <EpsCardList />
      <Advertising />
      <BuyEps />
      <ActiveOurCard />
      <EpsForEverybody />
      <TwoButton />
      <Footer />
    </div>
  );
};

export default MainPage;
