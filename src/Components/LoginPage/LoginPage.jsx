import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/eye1.png'
import image2 from '../../assets/eye2.svg'
import image from '../../assets/world2.png'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'


const schema =yup
.object({
    email: yup.string().required('please enter your email address').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, 'email address is not valid'),
    password: yup.string().required('please enter a password')
    .min(4, 'passsword cannot be less than 4')
    .max(10, 'passwords cannot be more than 10')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password should have at least one uppercase letter, one lowercase letter, one number and one special character'),
  })
  .required()


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    })
      const onSubmit = (data,e) =>{
        e.target[0].value = ''; //for username
        e.target[1].value = ''; //for email
        console.log(data)
        }

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isSignInClicked, setIsSignInClicked] = useState(false);


  const handleSignInClick = () => {
    setIsSignInClicked(true);
};


  return (
    <div>
        <div className='fixed bg-[#329cd1]  w-full z-20 p-5'>
            <div className='flex justify-between xl:px-[10rem] items-center'>
                <Link to={'/'}>
                    <h1 className='font-semibold  text-[28px] text-white'>One Exchange</h1>
                </Link>
                <div>
                    <img src={image} alt="image of the universe" className='w-[2rem]'/>
                </div>
            </div>
        </div>
        <div className='pt-[10rem] xl:text-center px-[1rem] xl:px-0'>
            <h1 className='xl:mr-[11.5rem] text-[28px] font-semibold pb-[1rem]'>Welcome to One Exchange</h1>
            <div className='xl:border xl:bg-[#fffefe] xl:border-[#ededed] xl:rounded-lg xl:mx-[35rem]'>
                <div className='text-start xl:ml-[7.5rem] ml-[.5rem]'>
                    <div className='flex items-center gap-[3rem] ml-[3rem] pt-[2rem] pb-[1rem]'>
                        <Link to={'/loginPage'} className='relative'>
                            <p>Sign in</p>
                        </Link>
                        <Link to={'/signupPage'} className={`relative ${isSignInClicked ? 'border-b-[5px] border-black w-[2rem] absolute top-[12rem]' : ''}`}
                        onClick={handleSignInClick}>
                            <p className=''>Create an account</p>
                            <div className='hover:border-t-[3px] hover:border-black hover:w-[10.5rem] hover:absolute top-[12rem]'></div>
                        </Link>
                    </div>
                        <div className='border-t-[2px] border-black w-[20rem] ml-[rem pb-[2rem]'></div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div>
                            <label htmlFor='text'>Your email address</label>
                            <div>
                                <input type="text" className={`border rounded-md outline-none py-[.4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                {...register ('email')}
                                />
                                <p className='mb-[1rem] text-[12px] text-red-600'>{errors.email?.message}</p> 
                            </div>
                        </div>
                        <div>
                            <label htmlFor='text'>Password </label>
                            <div>
                                <div className='relative'>
                                    <input type= {showPassword ? 'text' : 'password' }className={`border rounded-md outline-none py-[.4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                    errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register ('password')}
                                    />
                                    <p className='mb-[1rem] text-[12px] text-red-600'>{errors.password?.message}</p> 
                                    <img className='w-[1rem] absolute top-5 xl:right-[7.5rem] right-[1.5rem]'
                                    src={showPassword ? image1 : image2}
                                    alt='Toggle password visibility'
                                    onClick={togglePasswordVisibility}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value='Continue' className='border py-[.5rem] px-[8.5rem] bg-[#3dbeff] rounded-[.5rem] text-[16px] hover:bg-[#3dbeff] hover:text-white mb-[2rem]'/>
                    </form>
                </div>
            </div>
        </div>
        <div className='xl:py-[4rem]'>
            <div className='text-[10px] font-light xl:px-[10rem] px-[1.5rem]'>
                <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere excepturi perferendis dignissimos, tempore rem sunt optio eveniet sed quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum earum eligendi cupiditate, corrupti sunt laboriosam nihil placeat ullam quasi!</p>
                <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus expedita, dignissimos odit iure asperiores ratione voluptatum eos quas porro dolores molestiae corporis, aperiam amet unde modi ipsam optio sint! Cumque eum beatae et commodi, quos placeat soluta, culpa repellat, necessitatibus atque quidem! Consequatur nostrum voluptatibus ipsam, illum ullam odio!</p>
                <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit eaque! Cum nihil hic praesentium aperiam quasi ratione delectus laboriosam ducimus ullam, quod dolores quam culpa quo commodi tempora quia. Eos ut eaque itaque ex ducimus ad cum, sit, maiores modi consequatur perspiciatis vitae eum, laboriosam dicta libero voluptates laudantium.</p>
                <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus eaque praesentium rerum inventore quaerat tenetur, pariatur mollitia ad consequatur.</p>
                <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis!</p>
                <p className='pb-[3rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ea est perferendis culpa. Recusandae placeat quis exercitationem incidunt consequatur mollitia blanditiis quos perspiciatis fuga. Repudiandae tenetur cum perspiciatis deserunt velit id nobis quisquam, impedit voluptatum autem? Porro, nisi quam?</p>
            </div>
            <div className='border-t-[1px] border-gray-350 xl:w-[84.5rem] w-[21rem] xl:ml-[10rem] ml-[1.5rem] xl:flex justify-between text-[13px] '>
                <div className='xl:flex gap-[1rem] pt-[1rem]'>
                    <p className='pb-1 xl:pb-0'>Risk Disclosure</p>
                    <p className='pb-1 xl:pb-0'>Prevent Money Laundering</p>
                    <p className='pb-1 xl:pb-0'>Privacy Policy</p>
                </div>
                <div className='xl:pt-[1rem] pt-0 xl:pb-0 pb-2'>
                    <p>&copy; 2024 One Exchange</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage