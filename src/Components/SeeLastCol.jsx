



export default function SeeLastCol(){

  return(
  <>
    <section className='bg-[url("../Assets/newsletter-banner-img.jpg")] w-1/2' >
        <div className="container w-full  justify-center lg:flex ">       
         <div className="w-full ps-8  text-base  bg-white  m-[60px] ">
                    <span className='relative text-xs uppercase tracking-wider  opacity-1 pl-[50px]  text-primary'>
                        <span className='absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary  '>
                        </span>
                              SUBSCRIBE TO OUR NEWSLETTER
                    </span>
             <h1 className="w-4/6   mt-8 text-4xl text-semi-black font-semibold">See The Latest Collection & Get Special Offer</h1>
            <div className="flex w-full mt-8 md:w-full " >
                <input className="w-3/6 h-[40px]  bg-white border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-black block  p-2.5   " type="text" placeholder="Email address"/>
                <button type="button" className="focus:outline-none w-1/4  ml-2 text-semi-black bg-primary hover:text-white focus:ring-primary font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">SUBSCRIBE</button>
            </div>
                <p className="text-[#64748b]">Cras interdum lectus velit nibh senectus fringilla ut.</p>
       </div>
       </div>
        
        
    </section>
  </>
  )
}