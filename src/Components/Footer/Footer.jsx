import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
  const routesWithoutFooter = ['/signupPage', '/loginPage'];
  const isFooterVisible = !routesWithoutFooter.includes(location.pathname);

  if (!isFooterVisible) {
    return null;
  }
  return (

    <div className='xl:py-[4rem] py-[2rem]'>
        <div className='text-[10px] font-light xl:px-[10rem] px-[2rem]'>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere excepturi perferendis dignissimos, tempore rem sunt optio eveniet sed quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum earum eligendi cupiditate, corrupti sunt laboriosam nihil placeat ullam quasi!</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus expedita, dignissimos odit iure asperiores ratione voluptatum eos quas porro dolores molestiae corporis, aperiam amet unde modi ipsam optio sint! Cumque eum beatae et commodi, quos placeat soluta, culpa repellat, necessitatibus atque quidem! Consequatur nostrum voluptatibus ipsam, illum ullam odio!</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit eaque! Cum nihil hic praesentium aperiam quasi ratione delectus laboriosam ducimus ullam, quod dolores quam culpa quo commodi tempora quia. Eos ut eaque itaque ex ducimus ad cum, sit, maiores modi consequatur perspiciatis vitae eum, laboriosam dicta libero voluptates laudantium.</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus eaque praesentium rerum inventore quaerat tenetur, pariatur mollitia ad consequatur.</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis!</p>
            <p className='pb-[3rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ea est perferendis culpa. Recusandae placeat quis exercitationem incidunt consequatur mollitia blanditiis quos perspiciatis fuga. Repudiandae tenetur cum perspiciatis deserunt velit id nobis quisquam, impedit voluptatum autem? Porro, nisi quam?</p>
        </div>
        <div className='border-t-[1px] border-gray-350 xl:w-[84.5rem] w-[23rem] ml-[2rem] xl:ml-[10rem] xl:flex justify-between p-[rem] xl:p-0 text-[13px]'>
            <div className='xl:flex gap-[1rem] pt-[1rem]'>
                <p>Risk Disclosure</p>
                <p>Prevent Money Laundering</p>
                <p>Privacy Policy</p>
            </div>
            <div className='pt-[1rem]'>
                <p>&copy; 2024 One Exchange</p>
            </div>
        </div>
    </div>
  )
}

export default Footer