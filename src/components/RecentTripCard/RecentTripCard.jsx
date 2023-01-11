import React from 'react'

const RecentTripCard = ({minTitle,minDesc,img1}) => {
  return (
    <div className="recent p-4 shadow-2xl rounded-lg lg:p-3 lg:shadow-lg -mb-16">
    <div className="recent-img overflow-hidden rounded-lg">
      <img className="Picture h-60 hover:transform hover:scale-110 duration-300 ease-in-out" src={img1} alt="sea" />
    </div>
    <div className="recent-info mt-5">
      <h2 className="Min-Title text-2xl font-semibold">{minTitle}</h2>
      <p className="Min-Desc">{minDesc}
      </p>
    </div>
  </div>
  )
}

export default RecentTripCard