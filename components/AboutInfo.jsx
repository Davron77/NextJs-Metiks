import React from 'react'
import parse from 'html-react-parser'

function AboutInfo({ data }) {
  return (
    <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-y-12">
        {data.map((item) => (
          <div className="grid-cols-2 gap-10 rounded-lg lg:grid" key={item.id}>
            <img className="mb-5 w-full lg:mb-0" src={item.media} />
            <div className="text-[#795959]">
              <h3 className=" font-Bebas mb-5 text-[20px] font-bold leading-[26px] text-black sm:text-[40px] sm:leading-[50px]">
                {item.title}
              </h3>
              <div className="list-disc"> {parse(item.description)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutInfo
