import { useEffect, useState } from "react";




export default function CardSide({toggle}) {

  const [isToggle, setIsToggle] = useState();

  useEffect(()=>{
    setIsToggle(toggle)
  },[toggle])
  
const CloseCart = () =>{
        setIsToggle(false)
}

  if (isToggle) {
    return (<>
        <div className="bg-white z-10 shadow-md h-screen w-full lg:w-5/12 xl:w-4/12 md:w-8/12 fixed top-0 right-0 ">
            <div className="w-full h-16 flex justify-between items-center px-6 border-b">
                <div className="text-semi-black font-medium">Shopping Cart</div>

                <div onClick={CloseCart} className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
             
             <div className="w-full h-[78vh] flex flex-col justify-center items-center overflow-x-auto p-4" >
                {/* here we can add all product's commands */}
                 <span className="text-gray-400 font-medium">No products in the cart</span>               
             </div>

                 <button className=" absolute left-6 bottom-4 right-6 bg-primary flex justify-center p-3 text-sm font-semibold tracking-widest hover:bg-semi-gray hover:text-white">CONTINUE SHOPPING</button>
        </div>

        <div onClick={CloseCart} className="bg-semi-black bg-opacity-45 absolute top-0 left-0 bottom-0 right-0 h-screen w-full cursor-pointer"> </div>
      </>
    );
  } else {
  ''
  }
}
