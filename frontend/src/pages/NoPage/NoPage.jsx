import React from 'react'


function NoPage() {
  return (
    <div className="h-screen w-full bg-zinc-900 flex items-center justify-center relative">
      <div className="h-screen w-full bg-[url('/images/404.gif')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  )
}

export default NoPage