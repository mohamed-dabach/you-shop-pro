export default function NewCollection(){

    return(<>
      <div className="w-full lg:w-full xl:w-12/12 md:w-12/12 flex flex-wrap justify-between px-8 py-16">

         <div className=" bg-slate-300 w-full lg:w-6/12 xl:w-6/12">
            <img className="w-full" src="./src/Assets/new-main-collection.jpg" alt="" />
         </div>

         <div className=" w-full lg:w-6/12 xl:w-6/12 flex justify-center items-end mt-8 lg:mt-0 xl:mt-0 ">
            <div className=" w-full lg:w-9/12 xl:w-9/12 h-96 ">
                  <div className="w-full lg:w-12/12 xl:w-12/12 mt-2 relative">
                       <span className="w-3/12 lg:w-3/12 xl:w-3/12 bg-secondary h-[.6px] absolute top-3 left-0"></span>
                        <span className="w-6/12 absolute top-0 text-secondary left-24 lg:left-32 xl:left-32 font-light">NEW COLLECTION</span>
                    </div>

                    <div className="w-12/12 lg:w-10/12 xl:w-10/12 pt-12">
                        <h2 className="font-bold text-[2rem] lg-text-[2.6rem] xl:text-[2.6rem] text-black leading-tight">A Perfect Set For Your Living Room</h2>
                    </div>
                    <div className="pt-6 leading-loose w-11/12 ">
                        <p>
                          Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra nunc sed maecenas diam quisque habitasse.
                        </p>
                    </div>
                    <div className="w-full pt-7">
                        <button className="bg-primary w-7/12 px-4 py-3 text-semi-black tracking-widest text-[.8rem] font-semibold ">SHOP THIS COLLECTION</button>
                    </div>
            </div>
         </div>

      </div>

      <div>
        section 2 for products is starting....
      </div>

      <div>
        section 3 for rooms is starting....
      </div>
    </>)
}