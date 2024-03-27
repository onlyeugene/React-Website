import React, { useEffect, useState } from 'react'
import image1 from '../../assets/arrow.jpeg'
import image2 from '../../assets/world.png'
import image3 from '../../assets/cancel.png'
import image4 from '../../assets/sidearrow.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    // TO DISPLAY CERTAIN SECTIONS WITHOUT NAVBAR 
    const location = useLocation();
  const routesWithoutNavbar = ['/signupPage', '/loginPage'];
  const isNavbarVisible = !routesWithoutNavbar.includes(location.pathname);

  if (!isNavbarVisible) {
    return null;
  }

//   DISPLAY ON DROPDOWN 

  const [displayTrading, setDisplayTrading] = useState(false);
  const toggleDisplayTrading = () => {
      setDisplayTrading(!displayTrading);
      closeOtherDropdowns('Trading');
  };

  const [displayMarkets, setDisplayMarkets] = useState(false);
  const toggleDisplayMarkets = () => {
      setDisplayMarkets(!displayMarkets);
      closeOtherDropdowns('Markets');
  };

  const [displayPlatforms, setDisplayPlatforms] = useState(false);
  const toggleDisplayPlatforms = () => {
      setDisplayPlatforms(!displayPlatforms);
      closeOtherDropdowns('Platforms');
  };

  const [displayTools, setDisplayTools] = useState(false);
  const toggleDisplayTools = () => {
      setDisplayTools(!displayTools);
      closeOtherDropdowns('Tools');
  };

  const [displayCompany, setDisplayCompany] = useState(false);
  const toggleDisplayCompany = () => {
      setDisplayCompany(!displayCompany);
      closeOtherDropdowns('Company');
  };

  const closeOtherDropdowns = (currentDropdown) => {
      const dropdowns = ['Trading', 'Markets', 'Platforms', 'Tools', 'Company'];
      dropdowns.forEach((dropdown) => {
          if (dropdown !== currentDropdown) {
              switch (dropdown) {
                  case 'Trading':
                      setDisplayTrading(false);
                      break;
                  case 'Markets':
                      setDisplayMarkets(false);
                      break;
                  case 'Platforms':
                      setDisplayPlatforms(false);
                      break;
                  case 'Tools':
                      setDisplayTools(false);
                      break;
                  case 'Company':
                      setDisplayCompany(false);
                      break;
                  default:
                      break;
              }
          }
      });
  };

//   TO RELOAD THE PAGE  WHEN CLOSING DROPDOWN AND GO BACK TO DEFAULT VIEW 
  const handleH1Click = () => {
    // Reload the page when H1 is clicked
    window.location.reload();
};
const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);

  
      // Add or remove the class on the body
      if (!isModalOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    };
  
  return (
    <div className='bg-white xl:p-[2rem] p-[2rem] top-0 fixed w-full z-20'>
        <div className='flex justify-between left-5 top-4 fixed'>
            <div className='flex gap-[3rem] items-center relative'>
                <Link to={'/'}>
                    <h1 className='font-bold text-[24px]' onClick={handleH1Click }>One Exchange</h1>
                </Link>

                {/* HAMBURGER SECTION  */}
                <div className='xl:hidden  flex ml-[1rem] gap-[2rem]' onClick={toggleModal}>
                    <Link to={'/loginPage'}>
                        <button className=' fixed right-[5.5rem] top-4 text-[18px] sign'>Sign in</button>
                    </Link>
                    <div className='border-[1.5px] rounded-2xl  border-gray-300 py-[1rem] px-[1.5rem] fixed right-4 top-4'>
                        <div className='w-[1.3rem] border-t-[3px] border-gray-400 absolute top-2 left-[1.2rem]'></div>
                        <div className='w-[2rem] border-t-[3px] border-gray-400 absolute top-4 left-2'></div>
                        <div className='w-[1.3rem] border-t-[3px] border-gray-400 absolute top-6 left-2'></div>
                    </div>
                {isModalOpen && (
                    <div className="modal-overlay" onClick={toggleModal}></div>
                )}

            {isModalOpen && (
                <div className="dark">
                   <div className="fade bg-white w-[23rem] fixed right-[.05rem] h-[110vh] z-20 top-0">
                    <div>
                        <Link to={'/'}>
                            <h1 className='text-[24px] font-bold absolute top-4'>One Exchange</h1>
                        </Link>
                        <Link to={'/loginPage'}>
                        <button className=' fixed right-[5.5rem] top-4 text-[18px] sign'>Sign in</button>
                    </Link>
                    </div>
                <img src={image3} alt="" className="absolute left-[20rem] w-[2rem] top-5" onClick={toggleModal} />
                <ul className=" absolute top-[7rem] left-[rem]">
                    <Link to={'/Trading'} className='flex gap-1'>
                        <li className="pb-[1.5rem]  text-[16px]">Trading</li>
                        <div>
                            <img src={image4} alt="" className='w-[.8rem] pt-1.5'/>
                        </div>
                    </Link>
                    <Link to={'/Market'} className='flex gap-1'>
                        <li className="pb-[1.5rem]  text-[16px]">Market</li>
                        <div>
                            <img src={image4} alt="" className='w-[.8rem] pt-1.5'/>
                        </div>
                    </Link>
                    <Link to={'/Platform'} className='flex gap-1'>
                        <li className="pb-[1.5rem] text-[16px]">Platform</li>
                        <div>
                            <img src={image4} alt="" className='w-[.8rem] pt-1.5'/>
                        </div>
                    </Link>
                    <Link to={'/Tools'} className='flex gap-1'>
                        <li className="pb-[1.5rem] text-[16px]">Tools</li>
                        <div>
                            <img src={image4} alt="" className='w-[.8rem] pt-1.5'/>
                        </div>
                    </Link>
                    <Link to={'/Company'} className='flex gap-1'>
                        <li className="pb-[1.5rem] text-[16px]">Company</li>
                        <div>
                            <img src={image4} alt="" className='w-[.8rem] pt-1.5'/>
                        </div>
                    </Link>
                    <div className='border-t-[1px] border-gray-300'></div>

                    <div className='py-[2rem] pb-[5rem] px-[2rem]'>
                        <Link to={'/signupPage'}>
                            <button className='border py-2 px-[2rem] bg-[#3dbeff] rounded-[.5rem] text-[18px] hover:bg-[#3dbeff] hover:text-white'>Register</button>
                        </Link>
                        <Link to={'/loginPage'}>
                            <button className='bg-[#1f1f1f16] border py-2 px-2 rounded-[.5rem] text-[18px] hover:bg-slate-500 hover:text-white ml-3'>Try free demo</button>
                         </Link>
                    </div> 
                </ul>
            </div>
                </div>
            
            )}
                </div>

                <nav className='xl:block hidden'>
                    <ul className='flex items-center gap-3'>
                    <li className='cursor-pointer' onClick={toggleDisplayTrading}>
                                Trading
                            </li>
                            {displayTrading && (
                                <div className='fade flex fixed top-[4rem] w-[110rem] left-[-1.3rem] pl-[15rem] border-b-[1px] bg-[rgba(255, 255, 255, 0.8)] h-[200vh] backdrop-blur-md z-30 dark overflow-hidden p-[5rem] gap-[5rem]'>
                                    <div className='fade bg-white absolute top-0 w-[110rem] flex left-[1.3rem] pl-[15rem] p-[5rem] gap-[5rem] border-b-[1px]'>
                                        <div>
                                            <h1 className='text-[12px]  text-gray-600'>Accounts</h1>
                                            <p className='text-[20px] font-medium'>Standard accounts</p>
                                            <p className='text-[20px] font-medium'>Professional accounts</p>
                                        </div>
                                        <div>
                                            <h1 className='text-[12px] text-gray-600'>Conditions</h1>
                                            <p className='text-[20px] font-medium'>Deposits and withdrawals</p>
                                            <p className='text-[20px] font-medium'>Fees</p>
                                            <p className='text-[20px] font-medium'>Client protection</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <li className='cursor-pointer' onClick={toggleDisplayMarkets}>
                                Markets
                            </li>
                            {displayMarkets && (
                                <div className='fade flex fixed top-[4rem] w-[110rem] left-[-1.3rem] pl-[15rem] border-b-[1px] bg-[rgba(255, 255, 255, 0.8)] h-[200vh] backdrop-blur-md z-30 dark overflow-hidden p-[5rem] gap-[5rem]'>
                                    <div className='fade bg-white absolute top-0 w-[110rem] flex left-[1.3rem] pl-[15rem] p-[5rem] gap-[5rem] border-b-[1px]'>
                                        <div>
                                            <p className='text-[20px] font-medium'>Forex CFD</p>
                                            <p className='text-[20px] font-medium'>Commodities CFD</p>
                                            <p className='text-[20px] font-medium'>Stocks CFD</p>
                                            <p className='text-[20px] font-medium'>Indices CFD</p>
                                            <p className='text-[20px] font-medium'>Crypto CFD</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        <li className='cursor-pointer' onClick={toggleDisplayPlatforms}>Platforms</li>
                        {displayPlatforms && (
                            <div className='fade flex fixed top-[4rem] w-[110rem] left-[-1.3rem] pl-[15rem] border-b-[1px] bg-[rgba(255, 255, 255, 0.8)] h-[200vh] backdrop-blur-md z-30 dark overflow-hidden p-[5rem] gap-[5rem]'>
                                <div className='fade bg-white absolute top-0 w-[110rem] flex left-[1.3rem] pl-[15rem] p-[5rem] gap-[5rem] border-b-[1px]'>
                                    <div>
                                        <h1 className='text-[12px]  text-gray-600'>Desktop</h1>
                                        <p className='text-[20px] font-medium'>MetaTrader 5</p>
                                        <p className='text-[20px] font-medium'>MetaTrader 4</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] text-gray-600'>Mobile</h1>
                                        <p className='text-[20px] font-medium'>One Echange Trade app</p>
                                        <p className='text-[20px] font-medium'>MetaTrader mobile</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] text-gray-600'>Web</h1>
                                        <p className='text-[20px] font-medium'>One Exchange Terminal</p>
                                        <p className='text-[20px] font-medium'>MetaTrader WebTerminal</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <li className='cursor-pointer' onClick={toggleDisplayTools}>Tools</li>
                        {displayTools && (
                            <div className='fade flex fixed top-[4rem] w-[110rem] left-[-1.3rem] pl-[15rem] border-b-[1px] bg-[rgba(255, 255, 255, 0.8)] h-[200vh] backdrop-blur-md z-30 dark overflow-hidden p-[5rem] gap-[5rem]'>
                                <div className='fade bg-white absolute top-0 w-[110rem] flex left-[1.3rem] pl-[15rem] p-[5rem] gap-[5rem] border-b-[1px]'>
                                    <div>
                                        <p className='text-[20px] font-medium'>Analytical tools</p>
                                        <p className='text-[20px] font-medium'>Economic calender</p>
                                        <p className='text-[20px] font-medium'>Investment calculator</p>
                                        <p className='text-[20px] font-medium'>Currency converter</p>
                                        <p className='text-[20px] font-medium'>Tick History</p>
                                        <p className='text-[20px] font-medium'>VPS hosting</p>
                                        <p className='text-[20px] font-medium'>Trading Central WebTV</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <li className='cursor-pointer' onClick={toggleDisplayCompany}>Company</li>
                        {displayCompany && (
                            <div className='fade flex fixed top-[4rem] w-[110rem] left-[-1.3rem] pl-[15rem] border-b-[1px] bg-[rgba(255, 255, 255, 0.8)] h-[200vh] backdrop-blur-md z-30 dark overflow-hidden p-[5rem] gap-[5rem]'>
                                <div className='fade bg-white absolute top-0 w-[110rem] flex left-[1.3rem] pl-[15rem] p-[5rem] gap-[5rem] border-b-[1px]'>
                                    <div>
                                        <h1 className='text-[12px]  text-gray-600'>About</h1>
                                        <p className='text-[20px] font-medium'>Why One Exchange</p>
                                        <p className='text-[20px] font-medium'>Contact us</p>
                                        <p className='text-[20px] font-medium'>Help Center</p>
                                        <p className='text-[20px] font-medium'>One Exchange in the media</p>
                                        <p className='text-[20px] font-medium'>One Exchange in the community</p>
                                        <p className='text-[20px] font-medium'>One Exchange Team Pro</p>
                                        <p className='text-[20px] font-medium'>Blog</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] text-gray-600'>Corporate</h1>
                                        <p className='text-[20px] font-medium'>Regulation</p>
                                        <p className='text-[20px] font-medium'>Legal documents</p>
                                        <p className='text-[20px] font-medium'>Financial reports</p>
                                        <p className='text-[20px] font-medium'>Compensation fund</p>
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] text-gray-600'>Solutions</h1>
                                        <p className='text-[20px] font-medium'>Premier  Program</p>
                                        <p className='text-[20px] font-medium'>Social Trading</p>
                                        <p className='text-[20px] font-medium'>Portfolio Management</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='flex items-center gap-1.5'>
                            <li>Partners</li>
                            <div>
                                <img src={image1} alt="icon of an upright arrow" className='w-[.7rem]'/>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className='xl:flex items-center gap-3 absolute right-[-59rem] hidden '>
                <Link to={'/signupPage'}>
                    <button className='border py-2 px-4 bg-[#3dbeff] rounded-[.5rem] text-[13px] hover:bg-[#3dbeff] hover:text-white'>Register</button>
                </Link>
                <Link to={'loginPage'}>
                    <button className='bg-[#1f1f1f16] border py-2 px-4 rounded-[.5rem] text-[13px] hover:bg-slate-500 hover:text-white'>Sign in</button>
                </Link>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div>
                        <img src={image2} alt="icon of the world" className='w-[1rem]'/>
                    </div>
                    <p className='text-[12px]' onClick={ToggleEvent}>EN</p>
                </div>
            </div>
        </div>
        {/* <div className='w-[10rem] ml-[10rem] bg-white h-[40rem] absolute text-center backdrop-blur-lg  right-0 top-[4rem]'>
            <li className='list-none'>English</li>
        </div> */}
    </div>
  )
}

export default Navbar
