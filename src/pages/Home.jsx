import HomeHeader from "../Components/HomeHeader";
import WhatPeopleSay from "../Components/WhatPeopleSay";
import HomeMostSallingProduct from "../Components/HomeMostSallingProduct";
import SeeLastCol from "../Components/SeeLastCol";
import WhyChoseUs from "../Components/WhyChoseUs";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMostSallingProduct />

<WhatPeopleSay /> 
    <WhyChoseUs/> 
    <SeeLastCol />
    

    </>
  );
};

export default Home;
