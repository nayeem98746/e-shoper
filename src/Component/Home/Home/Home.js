import React from 'react';
import Checkout from '../../Checkout/Checkout';
import Success from '../../Success/Success';
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
    {/* <Checkout></Checkout> */}
      {/* <Success></Success> */}
      <Footer />
    </div>
  );
  }
export default Home;
