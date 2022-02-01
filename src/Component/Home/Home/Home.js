import React from 'react';

import CategoryBanner from './CategoryBanner/CategoryBanner';
import ItemContainer from './ItemContainer/ItemContainer';
import TopBanner from './TopBanner/TopBanner';

function Home() {

  return (
    <div>
      <TopBanner/>
      <CategoryBanner/>
      <ItemContainer/>
      <h3>footer </h3>
    </div>
  );
  }
export default Home;
