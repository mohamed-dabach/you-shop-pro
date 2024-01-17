import ic1 from "../Assets/icon-04.png";
import ic2 from "../Assets/icon-01.png";
import ic3 from "../Assets/icon-02.png";
import ic4 from "../Assets/icon-03.png";



export default function WhyChoseUs(){
    return(
        <>
    <section>
        <div className="px-16 pt-10 lg:pt-32 container relative">
        <span className='relative text-xs uppercase tracking-wider  opacity-1 pl-[50px]  text-primary'>
              <span className='absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary  '></span>
              IF YOU WONDER
            </span>
            <h1 className="bold text-[30px] text-black self-start font-medium md:text-[48px] leading-tigh pt-8">Why Choose Us</h1>
        </div>
        <hr className="w-5/6  ms-16 pb-20 lg:ms-28 " />
        <div className="w-5/6 ms-16 lg:pb-40 lg:ms-28 lg:flex lg:gap-28">
           <div>
            <img src={ic1} alt="" />
            <h5 className="text-semibold font-semibold  text-xl text-black">Big Discounts</h5>
            <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
           </div>
           <div>
            <img src={ic2} alt="" />
            <h5 className="text-semibold font-semibold  text-xl text-black">Big Discounts</h5>
            <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
           </div>
           <div>
            <img src={ic3} alt="" />
            <h5 className="text-semibold font-semibold  text-xl text-black">Big Discounts</h5>
            <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
           </div>
           <div>
            <img src={ic4} alt="" />
            <h5 className="text-semibold font-semibold  text-xl text-black">Big Discounts</h5>
            <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
           </div>
        </div>
    </section>
        </>
    )
}