import React from 'react'
import image5 from '../../../../assets/cover1.jpg';
import image1 from '../../../../assets/facebook.png'
import image2 from '../../../../assets/twitter.png'
import image3 from '../../../../assets/insta.png'
import image4 from '../../../../assets/linkedin.png'
import image6 from '../../../../assets/youtube.png'


const FourthHero = () => {
  return (
    <div>
        <div className='pt-[5rem] relative'>
            <img src={image5} alt="" className='xl:h-[25vh] w-full'/>
            <div className='back xl:flex text-white  xl:p-[4rem] p-[2rem] w-[23rem]  xl:gap-[7em] xl:w-[85rem] rounded-lg xl:ml-[10rem] ml-[2rem] absolute xl:top-[15rem] top-[12rem]'>
                <div>
                    <h1 className='xl:text-[32px] text-[25px] text-center xl:text-start'>Trade with a trusted exchange today</h1>
                    <p className='text-[15px] text-center xl:text-start'>See for yourself why One Exchange is the exchange of choice for over 500,000 traders and 60,000 partners.</p>
                </div>
                <div className='xl:flex xl:items-center xl:px-0 py-[1rem] xl:py-0 px-[2.5rem] text-center'>
                    <button className='border py-2 px-4 bg-[#3dbeff] rounded-[.5rem] text-[16px] hover:bg-[#3dbeff] text-black hover:text-white'>Register</button>
                    <button className='bg-[#1f1f1f16] border py-2 px-3 rounded-[.5rem] text-[16px] hover:bg-slate-500 hover:text-white xl:ml-3 xl:mt-0 mt-3'>Try free demo</button>
                </div>
            </div>
        </div>
        <div className='xl:px-[10rem] px-[2rem] pt-[10rem]'>
            <h1 className='text-[28px] font-medium py-[4rem]'>One Exchange</h1>
            <div>
                <div className='xl:flex grid grid-cols-2 gap-[3rem]'>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Accounts</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Standard Accounts</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Professional accounts</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Social Trading accounts</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Portfolio Management accounts</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Conditions</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Deposits and withdrawals</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Fees</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Client protection</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Markets</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Forex CFD</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Commodities CFD</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Stocks CFD</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Indices CFD</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Crypto CFD</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Platforms</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>MetaTrader 5</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>MetaTrader 4</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>One Exchange Trade App</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>MetaTrader Mobile</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Terminal</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>MetaTrader Web Terminal</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Tools</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Analytical tools</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Economic calendar</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Investment calculator</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Currency converter</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Tick history</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>VPS hosting</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Trading Central WebTV</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>About</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Why One Exchange</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Contact ua</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Help Center</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>One Exchange in the media</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>One Exchange in the community</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>One Exchange Team Pro Blog</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Corporate</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Regulation</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Legal documents</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Financial reports</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Compensation fund</p>
                    </div>
                    <div className='gap-[rem]'>
                        <h2 className='font-medium pb-[.3rem]'>Solutions</h2>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Premier Program</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Social Trading</p>
                        <p className='text-[12px] font-light text-gray-500 pb-[.3rem]'>Portfolio Management</p>
                    </div>
                </div>
            </div>
        <div className='flex gap-[.5rem] pt-[3rem] '>
            <img src={image1} alt="facebook" className='w-[3rem] rounded-3xl  border py-3 px-3'/>
            <img src={image2} alt="twitter" className='w-[3rem] rounded-3xl  border py-3 px-3'/>
            <img src={image3} alt="instagram" className='w-[3rem] rounded-3xl  border py-3 px-3'/>
            <img src={image4} alt="linkedin" className='w-[3rem] rounded-3xl  border py-3 px-3'/>
            <img src={image6} alt="youtube" className='w-[3rem] rounded-3xl  border py-3 px-3'/>
        </div>
        <div className='border-t-[1px] border-gray-350 xl:w-[84.5rem] mt-[3rem] flex justify-between text-[13px]'></div>
        </div>
    </div>
  )
}

export default FourthHero