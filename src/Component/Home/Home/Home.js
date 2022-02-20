import React from 'react';
import CallToAction from '../../CallToAction/CallToAction';
import ContactInfo from '../../ContactInfo/ContactInfo';
import Testimonoals from '../../Testimonoals/Testimonoals';
import Navber from '../Shared/Navber/Navber';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import Footer from './Footer/Footer';
import ItemContainer from './ItemContainer/ItemContainer';
import TopBanner from './TopBanner/TopBanner';

function Home() {

  return (
    <div>
      <Navber></Navber>
      <TopBanner/>
      <CategoryBanner/>
      <ItemContainer/>
      <Testimonoals></Testimonoals>
      <CallToAction></CallToAction>
      <ContactInfo></ContactInfo>
      <Footer />
    </div>
  );
  }
export default Home;
