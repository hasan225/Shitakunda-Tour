import React from "react";
import Hero from "../../components/Hero/Hero";
import bg from "../../assets/img/img5.jpg";
import Destination from "../../components/Destination/Destination";
import RecentTrips from "../../components/RecentTrips/RecentTrips";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home duration-500">
      <Hero
        bg={bg}
        classes={"h-screen"}
        heading={"Your Journey Your Story"}
        text={"Choose your Favorite Destination"}
        btn={"Travel Plan"}
        btnCls={"btn"}
      />
      <Destination/>
      <RecentTrips/>
    </div>
  );
};

export default Home;
