import React from 'react'
import image1 from '../../../../assets/users.png'
import image2 from '../../../../assets/licence.png'
import image3 from '../../../../assets/customer.png'
import image4 from '../../../../assets/certified.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <div className='text-center pt-[10rem] pb-[2rem]'>
            <h1 className='text-[40px] font-medium'>Upgrade the way <br/> you trade</h1>
            <p className='font-light'>Trade with the world's largest exchange and benefit from our <br/> better-than-market rates. </p>

            <div className='py-[2rem] pb-[5rem]'>
                <Link to={'/loginPage'}>
                    <button className='border py-2 px-4 bg-[#3dbeff] rounded-[.5rem] text-[13px] hover:bg-[#3dbeff] hover:text-white'>Register</button>
                </Link>
                <Link to={'/signupPage'}>
                    <button className='bg-[#1f1f1f16] border py-2 px-3 rounded-[.5rem] text-[13px] hover:bg-slate-500 hover:text-white ml-3'>Try free demo</button>
                </Link>
            </div>
            <div className='border-t-[1px] border-gray-350 xl:w-[85rem] xl:flex xl:ml-[10rem] xl:gap-[10.5rem]  xl:py-3 p-[1rem]'>
                <div className='flex gap-2 items-center xl:p-0 p-2'>
                    <div>
                        <img src={image1} alt="icon of users"  className='w-[1.5rem]'/>
                    </div>
                    <p>500,000+ active traders</p>
                </div>
                <div className='flex gap-2 items-center xl:p-0 p-2'>
                    <div>
                        <img src={image2} alt="icon of licences"  className='w-[1.5rem]'/>
                    </div>
                    <p>Multiple regulatory licences</p>
                </div>
                <div className='flex gap-2 items-center xl:p-0 p-2'>
                    <div>
                        <img src={image3} alt="icon of support"  className='w-[1.5rem]'/>
                    </div>
                    <p>24/7 customer support</p>
                </div>
                <div className='flex gap-2 items-center xl:p-0 p-2'>
                    <div>
                        <img src={image4} alt="icon of certication"  className='w-[1.5rem]'/>
                    </div>
                    <p>PCI DSS Certified</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero