import React from 'react'

function LeftSlide() {
  return (
    <div className="relative w-1/2 flex  h-screen bg-gray-100">
    <video
      className="w-full h-full object-cover  shadow-lg"
      autoPlay
      loop
      muted
      playsInline
      src="/videos/chess-pawns.mp4" 
    >
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="absolute  text-white px-20 mt-32 ">
      <h1 className="md:text-8xl font-black mb-4 font-lato">Ready to Play? <br></br> Create Your Chess Account</h1>
    </div>
  </div>
  )
}

export default LeftSlide