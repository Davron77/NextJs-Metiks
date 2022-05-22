import React from 'react'

function Banner({ urlIma }) {
  return (
    <div className="mx-auto max-w-[1440px] gap-5 lg:flex">
      <img className="h-[300px] object-cover md:h-[500px]" src={urlIma} />
    </div>
  )
}

export default Banner
