import React from 'react'

function Curtain({ curtainRef, svgRef, brandNameRef }) {
  return (
    <div ref={curtainRef} className="absolute z-10 h-screen w-full flex overflow-hidden bg-[#F5F3EC]">
      <h1 ref={brandNameRef} className='text-black z-20 mx-auto my-auto text-7xl font-Noto'>VONHEILIG</h1>
      <svg className='absolute top-0 w-full h-[110vh]' viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref={svgRef} className='fill-[#dbdbdb]' id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z">
        </path>
      </svg>
    </div>
  )
}

export default Curtain