import React from "react";
import RecentTripCard from "../RecentTripCard/RecentTripCard";
import sea from "../../assets/img/img.jpg";
import camp from "../../assets/img/img2.jpg";
import tree from "../../assets/img/img3.jpg";
import food from "../../assets/img/img4.jpg";
import car from "../../assets/img/img5.jpg";
import aurora from "../../assets/img/img6.jpg";

const RecentTrips = () => {
  return (
    <section className="RecentTrips Section -mt-24">
      <div className="info mb-16 text-center">
        <h1 className="Title">Recent Trips</h1>
        <p className="SubTitle">
          Find & Discover Unique Destinations using Goggle Map
        </p>
      </div>
      <div className="recent-wrap grid grid-cols-3 gap-4 lg:gap-2 mb-16 md:grid-cols-1">
        <RecentTripCard
          img1={camp}
          minTitle="Boalia Fall/Trail"
          minDesc="A new spring called Boalia has been added to Mirsarai in Chittagong, known as the kingdom of springs. This fountain, which is very different from other fountains, has not been discovered for a long time. There are five small waterfalls and a beautiful rocky slope called yard slope."
        />
        <RecentTripCard
          img1={sea}
          minTitle="Kumira Ghat"
          minDesc="Kumira Ghat is one of the most beautiful places in the port city of Chittagong which is located in Sitakunda. Kumiraghat is a great place to spend time on the seashore. From late afternoon to evening, the beautiful scenery of nature can be observed here."
        />
        <RecentTripCard
          img1={aurora}
          minTitle=" Horinmara Hatuvanga Trail"
          minDesc="The easiest and most beautiful trail in the Mirsarai area is the Horinmara Trail. It is called Harinmara Trail because deer used to be hunted in the spring. On the Horinmara Hatuvanga Trail you will find Harinmara, Hatuvanga and Sorpopropat. Upon entering this route you will find the magnificent Nilambar Lake."
        />
      </div>
    </section>
  );
};

export default RecentTrips;
