import React from "react";


const DestinationCard = ({minTitle,minDesc,img1,img2}) => {
  return (
    <div className="destiny flex  gap-16 lg:gap-8 lg:flex-col-reverse mb-16">
      <div className="destiny-info basis-2/4 lg:basis-full">
        <h2 className="Min-Title">{minTitle}</h2>
        <p className="Min-Desc">{minDesc}
        </p>
      </div>
      <div className="destiny-img grid grid-cols-2 gap-4 basis-2/4 lg:basis-full">
        <img className="Picture" src={img1} alt="sea" />
        <img className="Picture PicAbove" src={img2} alt="camp" />
      </div>
    </div>
  );
};

export default DestinationCard;
