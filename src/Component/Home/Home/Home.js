import React from 'react';

import CategoryBanner from './CategoryBanner/CategoryBanner';
import Footer from './Footer/Footer';
import ItemContainer from './ItemContainer/ItemContainer';
import TopBanner from './TopBanner/TopBanner';

function Home() {

  return (
    <div>
      <TopBanner/>
      <CategoryBanner/>
      <ItemContainer/>
      <Footer />
    </div>
  );
  }
export default Home;
