import React from 'react'

function HomeHeader() {
  return (
  
      <div className='block header ' >
        <div className='max-w-[1200px] flex m-auto py-[120px] '>
        <div>
        <div className='py-[24px] flex text-xl mb-5 '>
          <span  className=' text-xs uppercase tracking-wider spanbefore opacity-1 pl-[50px] text-primary'>
            Kayuu Furniture Store
          </span>
        </div>
        <div>
          <div className='text-5xl opacity-1 bold mb-5 text-semi-white'>
            <h1>
              Make Yourself At Home
            </h1>
          </div>
        </div>
        <div className='text-semi-white'>
          <p className='max-w-[50%] text-2xl'>Vestibulum, diam vulputate amet cras in diam quis turpis curabitur tellus aliquet tellus iaculis tempus, sollicitudin massa duis eleifend egestas turpis sit etiam commodo viverra lacinia ipsum convallis sed augue purus scelerisque non vestibulum elementum mi, pellentesque leo tincidunt integer.</p>
        </div>
        </div>
        </div>
      </div>
   
  )
}

export default HomeHeader