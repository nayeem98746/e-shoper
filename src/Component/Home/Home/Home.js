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
    </div>
  );
  }
export default Home;
