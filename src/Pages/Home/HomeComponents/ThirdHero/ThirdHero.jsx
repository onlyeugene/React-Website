import React, { useEffect } from 'react';
import image1 from '../../../../assets/sidearrow.png';
import image2 from '../../../../assets/first.webp';
import image3 from '../../../../assets/second.webp';
import image4 from '../../../../assets/third.webp';



const ThirdHero = () => {

  return (
    <div className='relative'>
      <header className='text-center font-medium text-[28px] pt-[3rem] sticky top-0 bg-white z-20'>
        Stay ahead of the markets
      </header>
      <p className='text-center font-light text-[13px] pt-[.5rem]'>
        Get the latest market news, trading analysis, and features updates.
      </p>

      <div className='flex items-center justify-center text-[13px] font-light pt-[1rem]'>
        <p>View all market news</p>
        <div>
          <img src={image1} alt='icon of arrow' className='w-[.7rem]' />
        </div>
      </div>

        <div className=''>
            <div className='xl:flex justify-center gap-[3rem] p-[1rem]'>
                <div className='border rounded-lg'>
                    <img src={image2} alt='Slide 1' className='w-[25rem] rounded-lg' />
                    <button className='border rounded-xl text-[10px] py-1 px-2 m-[1rem]'>Technical analysis</button>
                    <p className='m-[1rem] text-[14px]'>Two stocks to watch: Week 7, 2024.</p>
                </div>
                <div className='border rounded-lg'>
                    <img src={image3} alt='Slide 2' className='w-[25rem] rounded-lg' />
                    <button className='border rounded-xl text-[10px] py-1 px-2 m-[1rem]'>Technical analysis</button>
                    <p className='m-[1rem] text-[14px]'>Two stocks to watch: Week 7, 2024.</p>
                </div>
                <div className='border rounded-lg'>
                    <img src={image4} alt='Slide 3' className='w-[25rem] rounded-lg' />
                    <button className='border rounded-xl text-[10px] py-1 px-2 m-[1rem]'>Technical analysis</button>
                    <p className='m-[1rem] text-[14px]'>Two stocks to watch: Week 7, 2024.</p>
                </div>
                <div className=''>
                </div>
            </div>
            {/* <div className=''><img src={image1} alt="" /></div> */}
            <div className=''></div>
        </div>
    </div>
  );
};

export default ThirdHero;
