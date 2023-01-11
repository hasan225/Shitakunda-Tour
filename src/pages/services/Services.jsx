import React from "react";
import Hero from "../../components/Hero/Hero";
import bg from "../../assets/img/img.jpg";
import RecentTrips from "../../components/RecentTrips/RecentTrips";

const Services = () => {
  return (
    <div className="services">
      <Hero bg={bg} classes={"h-[60vh]"} heading={"Services"} />
      <div className="mt-24"><RecentTrips/></div>
    </div>
  );
};

export default Services;
