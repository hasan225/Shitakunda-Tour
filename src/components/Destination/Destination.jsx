import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import sea from "../../assets/img/img.jpg";
import camp from "../../assets/img/img2.jpg";
import tree from "../../assets/img/img3.jpg";
import food from "../../assets/img/img4.jpg";
import car from "../../assets/img/img5.jpg";
import aurora from "../../assets/img/img6.jpg";

const Destination = () => {
  return (
    <section className="destination Section">
      <div className="info mb-32 text-center">
        <h1 className="Title">Popular Destinations</h1>
        <p className="SubTitle">
          Tours gives you the oppurtunity to explore the world
        </p>
      </div>

      <DestinationCard
        minTitle={"Chandranath Hill"}
        minDesc={
          "Noise-free solitude far from the city, greenery all around, occasional call of animals and cool air. This thrilling feeling will give you a mountain of peace of mind. Yes, I was talking about Chandranath hill in Sitakunda. If you like to walk on inaccessible mountain paths, Chandranath hill is for you Chandranath Hill Chandranath Hill Chandranath Hill is 4 km from Sitakunda Bazar in Chittagong. A hill to the east is one of the most popular trekking routes for visitors. The height of Chandranath hill is approximately 1020 feet. There are two ways to climb Chandranath hill. The road on the right is almost entirely of stairs and the road on the left is entirely a mountain path, with some broken stairs. It’s easy to get up on the left side and down the stairs on the right, but you can use the path as you wish."
        }
        img1={sea}
        img2={camp}
      />
      <DestinationCard
        minTitle={"Sagolkanda Waterfall"}
        minDesc={
          "The trail of Sagolkanda Waterfall is a fairly unfamiliar trail. This amazing trail has large lotus waterfalls. Upstream of the big Komoldoho waterfall there are again 4-5 large and medium waterfalls. One of them is Chagalkanda Jharna. In the north (towards Dhaka) along the highway from Bara Darogar Hat, a brick will be opened first. You have to cross the brick open and take the first dirt road on the right hand side. If you go some distance along the road and go down to Jhiri and take Jhiri for about 20 minutes, you will see the lotus waterfall in Jhiri. Basically it’s a cascade. Another name of Chagalkanda Jharna is Kamalak Jharna."
        }
        img1={tree}
        img2={food}
      />
      <DestinationCard
        minTitle={"Jhorjhori Waterfalls"}
        minDesc={
          "A new spring called Boalia has been added to Mirsarai in Chittagong, known as the kingdom of springs. This fountain, which is very different from other fountains, has not been discovered for a long time. There are five small waterfalls and a beautiful rocky slope called yard slope. The main waterfall of this trail is Boalia and it is very easy to go to this waterfall. The specialty of Boalia waterfall is the strange shape of this waterfall. Its shape is very much like the umbrella of a frog and the head of a boiled fish. See Also: Malnicherra Tea Garden Estate Sylhet – A To Z Travel Guide"
        }
        img1={car}
        img2={aurora}
      />
    
    </section>
  );
};

export default Destination;
