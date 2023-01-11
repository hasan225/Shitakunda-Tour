import React from "react";
import Hero from "../../components/Hero/Hero";
import bg from "../../assets/img/img2.jpg";
import AboutInfo from "../../components/AboutInfo/AboutInfo";

const About = () => {
  return (
    <div className="about duration-500">
      <Hero bg={bg} classes={"h-[60vh]"} heading={"About"} />
     <section className="Section"> <AboutInfo
        heading={"Our History"}
        text={
          "You must be careful when traveling to the mountains and waterfalls. You need to have enough mental and physical strength to climb the mountain and go on the waterfall trail. No child or adult should be taken to Chandranath hills and springs. Contact Travel Mate for more detailed information and advice about the places."
        }
      />
      <AboutInfo
        heading={"How To Go To Sitakunda?"}
        text={
          "You may depart for Sitakunda by night train or bus at night to get a full day for sightseeing. You can reach Sitakunda directly by bus from Dhaka to Chittagong. AC / Non-AC buses of various companies including S. Alam, Shyamoli, Saudia, Unique, Hanif, Eagle and ENA run from Sayedabad, Fakirapul, Mohakhali bus stand go in a regular basis. Tickets for non-AC buses cost from Tk 420 to Tk 480 per person and for AC buses from Tk 800 to Tk 1,100."
        }
      />
      <AboutInfo
        heading={"Why Sitakunda"}
        text={
          "Fountains, mountains, Waterfalls, Beach, clouds, you can enjoy everything from here? Actually, this is the reason why innumerable tourists are going to Sitakundo every day. Some are camping while others are trekking and coming back day after day. Sitakunda has gained more popularity as it is possible to return from Dhaka, Chittagong, Feni, Comilla or any other district in Bangladesh by day trip."
        }
      /></section>
    </div>
  );
};

export default About;
