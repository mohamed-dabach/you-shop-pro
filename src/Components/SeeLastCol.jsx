import img from "../Assets/newsletter-banner-img.jpg";




export default function SeeLastCol(){

  return(
  <>
    <section className=" w-full h-full justify-center lg:flex  ">
       <div className="w-full ">
        <img className="w-full h-full" src={img} alt="" />
       </div>
       <div className=" w-full   ps-8  text-base leading-6 bg-white  m-[60px] ">
                    <span className='relative text-xs uppercase tracking-wider  opacity-1 pl-[50px]  text-primary'>
                        <span className='absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary  '>
                        </span>
                              SUBSCRIBE TO OUR NEWSLETTER
                    </span>
        <h1 className="w-4/6   mt-8 text-4xl text-semi-black font-semibold">See The Latest Collection & Get Special Offer</h1>
        <div className="flex w-5/6 mt-8 md:w-full " >
            <input className="w-3/6 h-[40px]  bg-gray-50 border border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-black block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " type="text" placeholder="Email address"/>
            <button type="button" className="focus:outline-none w-1/4  ml-2 text-semi-black bg-primary hover:text-white focus:ring-primary font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">SUBSCRIBE</button>
        </div>
        <p className="text-[#64748b]">Cras interdum lectus velit nibh senectus fringilla ut.</p>
       </div>
    </section>
  </>
  )
}