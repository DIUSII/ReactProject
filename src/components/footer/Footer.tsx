import React from 'react';

import LinkByAllSite from './components/linkByAllSite/LinkByAllSite';
import PersAndRulesAtSite from './components/persAndRulesAtSite/PersAndRulesAtSite';
import AllInformationAboutSite from './components/allInformationAboutSite/AllInformationAboutSite';

import './Footer.scss';
import 'assets/sass/mainStyles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fixed-container">
        <AllInformationAboutSite />
        <LinkByAllSite />
        <PersAndRulesAtSite />
      </div>
    </div>
  );
};

export default Footer;