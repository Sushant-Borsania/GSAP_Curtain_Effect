import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Curtain from './Curtain';


function Head() {
  //Curtain ref
  const curtainRef = useRef()
  const svgRef = useRef()
  const brandNameRef = useRef()

  //Component Ref
  const headerRef = useRef()
  // Grid:1 refs
  const gridOneRef = useRef()
  const gridOneItemsRef = useRef([])

  const gridTwoRef = useRef()
  const gridTwoItemsRef = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([gridOneItemsRef.current, gridTwoItemsRef.current], { opacity: 0 })
      const cleanedGridOneItems = {
        current: [...new Set(gridOneItemsRef.current)]
      }
      const cleanedGridTwoItems = {
        current: [...new Set(gridTwoItemsRef.current)]
      }

      const tl = gsap.timeline()
      tl
        .to(svgRef.current, {
          duration: 0.8,
          attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
          ease: "power2.easeIn",
          delay: 1
        })
        .to(svgRef.current, {
          duration: 0.8,
          attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
          ease: "power2.easeIn"
        })
        .to(brandNameRef.current, {
          opacity: 0,
        })
        .to(curtainRef.current, {
          height: 0,
        })
        .to(cleanedGridOneItems.current, {
          opacity: 1,
          stagger: 0.3,
        })
        .to(cleanedGridTwoItems.current, {
          opacity: 1,
          stagger: 0.3,
        }, "<")
    }, curtainRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className='mt-4 min-h-screen'>
      <Curtain curtainRef={curtainRef} svgRef={svgRef} brandNameRef={brandNameRef} />
      <div className='px-4'>
        <div className='flex font-Noto' ref={headerRef}>
          <h1 className='text-2xl md:text-7xl font-thin flex-1'>Material</h1>
          <ul className='flex space-x-4 mt-auto font-Open'>
            <li>All</li>
            <li className='opacity-25'>Wood</li>
            <li className='opacity-25'>Steel</li>
            <li className='opacity-25'>Rope</li>
          </ul>
        </div>
        {/* grids - 1 */}
        <div className='mt-4 grid grid-cols-1 md:grid-cols-8 w-full gap-4 md:h-60 px-2' ref={gridOneRef}>
          <div className='col-span-1 md:col-span-2 flex flex-col' ref={(item) => { gridOneItemsRef.current.push(item) }}>
            <p className='font-Open text-xs'>01</p>
            {/* image */}
            <img src='./wood_1.jpeg' alt="wood texture" className='h-52' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Registry office</p>
              <p className='opacity-30 text-xs'>/ 1899</p>
            </div>
          </div>
          <div className='order-first md:order-none py-16 md:py-0 my-auto col-span-1 md:col-span-2 font-Noto mt-auto text-4xl font-thin bg-none' ref={(item) => { gridOneItemsRef.current.push(item) }}>
            {/* writing */}
            <div className='md:mb-16'>
              <p className='bg-none'>Wood</p>
              <p>Materials</p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-1 flex flex-col' ref={(item) => { gridOneItemsRef.current.push(item) }}>
            <p className='font-Open text-xs'>02</p>
            <img src='./wood_8.jpeg' alt="wood texture" className='h-52' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Upper Forest</p>
              <p className='opacity-30 text-xs'>/ 1897</p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2' ref={(item) => { gridOneItemsRef.current.push(item) }}>
            <p className='font-Open text-xs'>03</p>
            <img src='./wood_3.jpeg' alt="wood texture" className='h-52 w-full' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Relic Brushed & Oiled</p>
              <p className='opacity-30 text-xs'>/ 1894</p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-1 flex flex-col' ref={(item) => { gridOneItemsRef.current.push(item) }}>
            <p className='font-Open text-xs'>04</p>
            <img src='./wood_6.jpeg' alt="wood texture" className='h-52' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Relic Oiled</p>
              <p className='opacity-30 text-xs'>/ 1894</p>
            </div>
          </div>
        </div>
        {/* grids - 2 */}
        <div className='my-12 grid grid-cols-1 md:grid-cols-8 w-full gap-4 md:h-60 px-2' ref={gridTwoRef}>
          <div className=' col-span-1 flex flex-col' ref={(item) => { gridTwoItemsRef.current.unshift(item) }}>
            <p className='font-Open text-xs'>05</p>
            <img src='./wood_6.jpeg' alt="wood texture" className='h-52' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Dormitory</p>
              <p className='opacity-30 text-xs'>/ 1897</p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 flex flex-col' ref={(item) => { gridTwoItemsRef.current.unshift(item) }}>
            <p className='font-Open text-xs'>06</p>
            {/* image */}
            <img src='./wood_7.jpeg' alt="wood texture" className='h-52 w-full' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Dormitory Solid Oak</p>
              <p className='opacity-30 text-xs'>/ 1899</p>
            </div>
          </div>
          <div className='order-first md:order-none py-16 md:py-0 col-span-1 md:col-span-2 font-Noto mt-auto text-4xl font-thin bg-none' ref={(item) => { gridTwoItemsRef.current.unshift(item) }}>
            {/* writing */}
            <div className='mb-16'>
              <p className='bg-none'>Steel</p>
              <p>Materials</p>
            </div>
          </div>
          <div className=' col-span-1 md:col-span-2' ref={(item) => { gridTwoItemsRef.current.unshift(item) }}>
            <p className='font-Open text-xs'>07</p>
            <img src='./steel_1.jpeg' alt="wood texture" className='h-52 w-full' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Raw Steel</p>
              <p className='opacity-30 text-xs'>/ 1894</p>
            </div>
          </div>
          <div className=' col-span-1 flex flex-col' ref={(item) => { gridTwoItemsRef.current.unshift(item) }}>
            <p className='font-Open text-xs'>08</p>
            <img src='./steel_2.jpeg' alt="wood texture" className='h-52' />
            <div className='flex flex-col mt-1'>
              <p className='uppercase text-xs'>Steel Brushed</p>
              <p className='opacity-30 text-xs'>/ 1894</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Head