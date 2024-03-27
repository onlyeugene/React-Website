import React from 'react'
import image1 from '../../../../assets/phone.png'
import image2 from '../../../../assets/xau.png'
import image3 from '../../../../assets/usoil.png'
import image4 from '../../../../assets/eurusd.png'
import image5 from '../../../../assets/us30.png'
import image6 from '../../../../assets/aapl.png'
import './Trade.css'
import image7 from '../../../../assets/rightarrow.png'

const Trade = () => {

  return (
    <div className='back w-full text-white'>
        <header className='text-center font-medium text-[28px] p-[3rem]'>Trade without hassles</header>
        <div className='xl:flex justify-center gap-[1rem]'>
            <div className='xl:py-[7rem]'>
                <div className='text-center'>
                    <button className='border bg-cyan-900 rounded-xl text-[11px] py-1 px-1 '>Withdrawals</button>
                    <h1 className='text-[20px]'>Instant withdrawals</h1>
                    <p className='font-extralight text-[14px]'>Get your deposits and withdrawals approved <br /> the moment you click the button.</p>
                </div>
                <div className='text-center py-[5rem]'>
                    <button className='border  bg-cyan-900 rounded-xl text-[11px] py-1 px-1'>Stop outs</button>
                    <h1 className='text-[20px]'>30% fewer stop outs</h1>
                    <p className='font-extralight text-[14px]'>Be unstoppable with our proprietary <br /> Stop Out Protection feature.</p>
                </div>
            </div>
            <div className=''>
                <img src={image1} alt="" className='rotate w-[35rem]'/>
            </div>
            <div className='py-[7rem]'>
                <div className='text-center'>
                    <button className='border  bg-cyan-900 rounded-xl text-[11px] py-1 px-1'>Execution speed</button>
                    <h1 className='text-[20px]'>Ultra-fast execution</h1>
                    <p className='font-extralight text-[14px]'>Execute your orders in milliseconds, no matter how big they are <br /> the moment you click the button.</p>
                </div>
                <div className='text-center xl:py-[5rem] py-[2rem]'>
                    <button className='border  bg-cyan-900 rounded-xl text-[11px] py-1 px-1'>Swaps</button>
                    <h1 className='text-[20px]'>No overnight fees</h1>
                    <p className='font-extralight text-[14px]'>Hold your leveraged positions for as long as <br /> you like, swap-free. T&C apply.</p>
                </div>
            </div>
        </div>
        <header className='text-center font-medium text-[28px] xl:pt-[3rem]'>Trade assets from global markets</header>
        <p className='text-center font-extralight p-1 xl:p-0 text-[13px]'>Capitalize on every opportunity with the world's most popular assets</p>
        <div className='flex xl:gap-[17rem] gap-[5rem] xl:ml-[12rem] px-[1rem] xl:px-0 text-[12px] font-extralight pt-[4rem] pb-3'>
            <p>Instruments</p>
            <div className='flex xl:gap-[6rem]'>
                <p className='xl:block hidden'>Leverage</p>
                <p>Avg.spread, pips</p>
                <p className='xl:block hidden'>Swap-free</p>
            </div>
        </div>
        <div className='border-t-[1px] border-gray-300 xl:gap-[13.7rem] gap-[3.7rem] pb-1 xl:w-[80rem] xl:ml-[12rem] xl:px-0 px-[1rem] flex items-center'>
            <div className='flex items-center gap-2 pt-2'>
                <div>
                    <img src={image2} alt="icon of xau" className='w-[1.8rem] xl:block hidden'/>
                </div>
                <div>
                    <h1 className='text-[14px] font-medium'>XAUUSD</h1>
                    <p className='text-[10px] font-extralight'>Gold vs US Dollar</p>
                </div>
            </div>
            <div className='flex items-center xl:gap-[4rem] text-[13px]'>
                <p className='xl:block hidden'>Customizable</p>
                <p>12.5</p>
                <p className='ml-[6.5rem] xl:block hidden'>Available</p>
                <div className='flex items-center ml-[8rem] gap-1'>
                    <p>Metals</p>
                    <div>
                        <img src={image7}
                        alt='icon of arrow' 
                        className='w-[.7rem]'
                        />    
                    </div>
                </div>
                
            </div>
        </div>
        <div className='border-t-[1px] border-gray-300 xl:gap-[13.7rem] gap-[6rem] pb-1 xl:w-[80rem] xl:ml-[12rem] xl:px-0 px-[1rem] flex items-center'>
            <div className='flex items-center gap-2 pt-2'>
                <div>
                    <img src={image3} alt="icon of xau" className='w-[1.8rem] xl:block hidden'/>
                </div>
                <div>
                    <h1 className='text-[14px] font-medium'>USOIL</h1>
                    <p className='text-[10px] font-extralight'>Crude Oil</p>
                </div>
            </div>
            <div className='flex items-center xl:gap-[7.7rem] xl:ml-[2.5rem] ml-0 text-[13px]'>
                <p className='xl:block hidden'>1:200</p>
                <p>1.7</p>
                <p className='ml-[3.2rem] xl:block hidden'>Swap applied</p>
                <div className='flex items-center xl:ml-[2.5rem] ml-[8.5rem] gap-1'>
                    <p>Energies</p>
                    <div>
                        <img src={image7}
                        alt='icon of arrow' 
                        className='w-[.7rem]'
                        />    
                    </div>
                </div>
                
            </div>
        </div>


        <div className='border-t-[1px] border-gray-300 xl:gap-[13.7rem] gap-[3.8rem] pb-1 xl:w-[80rem] xl:ml-[12rem] xl:px-0 px-[1rem] flex items-center'>
            <div className='flex items-center gap-2 pt-2'>
                <div>
                    <img src={image4} alt="icon of xau" className='w-[1.8rem] xl:block hidden'/>
                </div>
                <div>
                    <h1 className='text-[14px] font-medium'>EURUSD</h1>
                    <p className='text-[10px] font-extralight'>Euro vs US Dollar</p>
                </div>
            </div>
            <div className='flex items-center xl:gap-[4rem] xl:ml-[.3rem] ml-0  text-[13px]'>
                <p className='xl:block hidden'>Customizable</p>
                <p>0.6</p>
                <p className='ml-[6.7rem] xl:block hidden'>Available</p>
                <div className='flex items-center xl:ml-[8rem] ml-[8.2rem] gap-1'>
                    <p>Currencies</p>
                    <div>
                        <img src={image7}
                        alt='icon of arrow' 
                        className='w-[.7rem]'
                        />    
                    </div>
                </div>
                
            </div>
        </div>
        <div className='border-t-[1px] border-gray-300 xl:gap-[12.3rem] gap-[2rem] pb-1 xl:w-[80rem] xl:ml-[12rem] xl:px-0 px-[1rem] flex items-center'>
            <div className='flex items-center gap-2 pt-2'>
                <div>
                    <img src={image5} alt="icon of xau" className='w-[1.8rem] xl:block hidden'/>
                </div>
                <div>
                    <h1 className='text-[14px] font-medium'>US30</h1>
                    <p className='text-[10px] font-extralight'>US Wall Street 30 Index</p>
                </div>
            </div>
            <div className='flex items-center xl:gap-[7.5rem] text-[13px]'>
                <p className='xl:block hidden'>1:400</p>
                <p>4.9</p>
                <p className='ml-[3.2rem] xl:block hidden'>Available</p>
                <div className='flex items-center xl:ml-[4.5rem] ml-[8.3rem] gap-1'>
                    <p>Indices</p>
                    <div>
                        <img src={image7}
                        alt='icon of arrow' 
                        className='w-[.7rem]'
                        />    
                    </div>
                </div>
                
            </div>
        </div>
        <div className='border-t-[1px] border-gray-300 xl:gap-[13.7rem] gap-[6rem] pb-1 xl:w-[80rem] xl:ml-[12rem] xl:px-0 px-[1rem] flex items-center'>
            <div className='flex items-center gap-2 pt-2'>
                <div>
                    <img src={image6} alt="icon of xau" className='w-[1.8rem] xl:block hidden'/>
                </div>
                <div>
                    <h1 className='text-[14px] font-medium'>AAPL</h1>
                    <p className='text-[10px] font-extralight'>Apple Inc.</p>
                </div>
            </div>
            <div className='flex items-center gap-[8rem] xl:ml-[2.5rem] ml-0  text-[13px]'>
                <p className='xl:block hidden'>1:20</p>
                <p>0.5</p>
                <p className='ml-[2.6rem] xl:block hidden'>Swap applied</p>
                <div className='flex items-center xl:ml-[2.5rem] ml-[.2rem] gap-1'>
                    <p>Stocks</p>
                    <div>
                        <img src={image7}
                        alt='icon of arrow' 
                        className='w-[.7rem]'
                        />    
                    </div>
                </div>
                
            </div>
        </div>
        <div className='border-t-[1px] border-gray-400  xl:w-[80rem] xl:ml-[12rem]'></div>
        <div className='py-[2rem] pb-[5rem] justify-center flex'>
                <button className='border py-2 px-4 bg-[#3dbeff] text-black rounded-[.5rem] text-[13px] hover:bg-[#3dbeff] hover:text-white'>Register</button>
                <button className='bg-[#1f1f1f16] border py-2 px-3 rounded-[.5rem] text-[13px] hover:bg-slate-500 hover:text-white ml-3'>Try free demo</button>
        </div>
    </div>
  )
}

export default Trade