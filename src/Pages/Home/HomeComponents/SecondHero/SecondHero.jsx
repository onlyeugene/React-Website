import React, { useEffect, useRef } from "react";
import image1 from "../../../../assets/hero2.jpg";
import image2 from "../../../../assets/moment.png";
import image5 from "../../../../assets/security.png";
import image6 from "../../../../assets/second pic.jpg";
import image3 from "../../../../assets/sidearrow.png";
import image4 from "../../../../assets/star.png";
import Typed from "typed.js";


const SecondHero = () => {
    const typedTextRef = useRef(null);

    useEffect(() => {
      // Options for Typed.js
      const options = {
        strings: ["Client Protection","Project Management", "Team Collaboration"], 
        typeSpeed: 70,
        showCursor: false,
        loop: true,
        delay: 500,
      };
  
      // Initialize Typed.js
      const typed = new Typed(typedTextRef.current, options);
  
      // Clean up on component unmount
      return () => {
        typed.destroy();
      };
    }, []);
    const typedTextReff = useRef(null);

    useEffect(() => {
      // Options for Typed.js
      const options = {
        strings: [" MetaTrader 5","Why OneExchange?"],
        typeSpeed: 70,
        showCursor: false,
        loop: true,
        delay: 500,
      };
  
      // Initialize Typed.js
      const typed2 = new Typed(typedTextReff.current, options);
  
      // Clean up on component unmount
      return () => {
        typed2.destroy();
      };
    }, []);
  return (
    <div>
        <div className="xl:flex flex flex-col-reverse xl:flex-row justify-center p-[3rem] gap-[4rem]">
            <div>
                <img src={image1} alt="" className="w-[30rem] rounded-2xl" />
            </div>
            <div className="xl:pt-[8rem]">
                <img src={image2} alt="" className="rotate w-[4rem] ml-[8rem] xl:ml-0" />
                <h1 className="pb-3 text-[28px] text-center xl:text-start">Seize every opportunity</h1>
                <p className="pb-[2rem] font-light text-center xl:text-start">
                    Trade online anytime, anywhere. On web, mobile, desktop.
                </p>
                <div className="flex items-center gap-1 font-extralight">
                    <li className="list-none text-[14px]"><span ref={typedTextReff}></span></li>
                    <div>
                        <img src={image3} alt="" className="w-[.7rem]" />
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:flex justify-center p-[3rem] gap-[4rem]">
            <div className="pt-[2rem]">
                <img src={image5} alt="" className="rotate w-[4rem] xl:ml-0 ml-[8rem]" />
                <h1 className="pb-3 text-[28px] text-center xl:text-start">Your security is our top priority</h1>
                <p className="pb-[2rem] font-light text-center xl:text-start">
                    From secure payments  to real-time trading and everything <br/>in between, you are covered.
                </p>
                <div className="flex items-center gap-1 font-extralight pb-[2rem]">
                    <li className="list-none text-[14px]"><span ref={typedTextRef}></span></li>
                    <div>
                        <img src={image3} alt="" className="w-[.7rem] " />
                    </div>
                </div>
            </div>
            <div>
                <img src={image6} alt="" className="w-[30rem] rounded-2xl" />
            </div>
        </div>

        <div>
            <header className='text-center font-medium text-[28px] pt-[3rem]'>Trade with confidence</header>
            <p className='text-center font-extralight text-[13px] p-2 xl:p-0 '>The numbers speak for themselves. Trade with the support of the world's <br className="xl:block hidden"/> largest exchange.</p>

            <div className="xl:flex xl:ml-[12rem] xl:gap-[7.5rem] p-[2rem] text-center ">
            <div className="xl:border-l-[1px] h-[6.5rem] ml-[2rem] border-gray-300 p-5 px-5 ">
                <div>
                    <h1 className="text-[28px]">$4+ trillion</h1>
                    <p className="text-[12px]">monthly trading volume</p>
                </div>
                
            </div>
            <div className="xl:border-l-[1px] h-[6.5rem] ml-[2rem] border-gray-300 p-5 px-5">
                <div>
                    <h1 className="text-[28px]">1.9 billion</h1>
                    <p className="text-[12px]">trades executed in 2024</p>
                </div>
                
            </div>
            <div className="xl:border-l-[1px] h-[6.5rem] ml-[2rem] border-gray-300 p-5 px-5">
                <div>
                    <h1 className="text-[28px]">64,000+</h1>
                    <p className="text-[12px]">registered partners</p>
                </div>
                
            </div>
            <div className="xl:border-l-[1px] h-[6.5rem] ml-[2rem] border-gray-300 p-5 px-5">
                <div>
                    <h1 className="text-[28px] relative">4.6 <img src={image4} alt="icon of a star" className="w-[.7rem] absolute xl:top-1 top-1 right-[7rem] xl:right-[1rem]"/></h1>
                    <p className="text-[12px]">Trustpilot rating</p>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  );
};

export default SecondHero;
