import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black py-4 px-6 rounded-md bg-opacity-60 hover:bg-gray-50'><i className="fas fa-play"></i> Play</button>
        <button className='bg-gray-600 mx-2 text-white py-4 px-6 rounded-md bg-opacity-70'><i className="fas fa-info-circle"></i> More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle
