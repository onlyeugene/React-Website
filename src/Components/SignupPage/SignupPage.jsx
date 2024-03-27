import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/eye1.png'
import image2 from '../../assets/eye2.svg'
import image3 from '../../assets/arrowdown.jpeg'
import image from '../../assets/world2.png'
// import image4 from '../../assets/circle.png'
import crossIcon from '../../assets/x.png'
import checkIcon from '../../assets/check.png'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form'


const schema =yup
.object({
    country: yup.string().required(' please specify your country / region of residence'),
    email: yup.string().required('please enter your email address').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'email address is not valid'),
    password: yup.string().required('please create a password')
    .min(4, 'passsword cannot be less than 4')
    .max(10, 'passwords cannot be more than 10')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'password should have at least one uppercase letter, one lowercase letter, one number and one special character'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match'),
  })
  .required()


const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data,e) =>{
        e.target[0].value = ''; //for country
        e.target[1].value = ''; //for email
        e.target[2].value = ''; //for password
        e.target[3].value = ''; //for confir password
        console.log(data)
        alert('Registraton is succesful')
    } 

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const checkPasswordCriteria = () => {
    const password = watch('password');

    if (!password) {
        return (
            null
            // <div className='mb-[2rem]'>
            //     <div className='flex items-center gap-2'>
            //         <div>
            //             <img src={image4} alt="icon of circle" className='w-[.5rem]' />
            //         </div>
            //         <p className='text-[12px]'>At least 8 characters required </p>
            //     </div>
            //     <div className='flex items-center gap-2'>
            //         <div>
            //             <img src={image4} alt="icon of circle" className='w-[.5rem]' />
            //         </div>
            //         <p className='text-[12px]'>At least one upper and one lower case letter</p>
            //     </div>
            //     <div className='flex items-center gap-2'>
            //         <div>
            //             <img src={image4} alt="icon of circle" className='w-[.5rem]' />
            //         </div>
            //         <p className='text-[12px]'>At least one lower case letter</p>
            //     </div>
            //     <div className='flex items-center gap-2'>
            //         <div>
            //             <img src={image4} alt="icon of circle" className='w-[.5rem]' />
            //         </div>
            //         <p className='text-[12px]'>At least one number </p>
            //     </div>
            //     <div className='flex items-center gap-2'>
            //         <div>
            //             <img src={image4} alt="icon of circle" className='w-[.5rem]' />
            //         </div>
            //         <p className='text-[12px]'>At least one special character</p>
            //     </div>
            // </div>
        );
    }

    const isLengthValid = password.length >= 8;
    const isUpperCaseValid = /[A-Z]/.test(password);
    const isLowerCaseValid = /[a-z]/.test(password);
    const isNumberValid = /\d/.test(password);
    const isSpecialCharValid = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    return (
        <div className='text-[12px] mb-[2rem]'>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={isLengthValid ? checkIcon : crossIcon} alt="icon of circle" className='w-[.5rem]' />
                </div>
                <p className={`${ isLengthValid ? 'text-green-500' : 'text-red-500'}`}>{isLengthValid ? 'Between 8-15 characters' : 'At least 8 characters required'}</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={isUpperCaseValid ? checkIcon : crossIcon} alt="icon of circle" className='w-[.5rem]' />
                </div>
                <p className={`${ isUpperCaseValid ? 'text-green-500' : 'text-red-500'}`}>At least one upper and one lower case letter</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={isLowerCaseValid ? checkIcon : crossIcon} alt="icon of circle" className='w-[.5rem]' />
                </div>
                <p className={`${ isLowerCaseValid ? 'text-green-500' : 'text-red-500'}`}>At least one lower case letter</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={isNumberValid ? checkIcon : crossIcon} alt="icon of circle" className='w-[.5rem]' />
                </div>
                <p className={`${ isNumberValid ? 'text-green-500' : 'text-red-500'}`}>At least one number</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={isSpecialCharValid ? checkIcon : crossIcon} alt="icon of circle" className='w-[.5rem]' />
                </div>
                <p className={`${ isSpecialCharValid ? 'text-green-500' : 'text-red-500'}`}>At least one special character</p>
            </div>
        </div>
    );
};


// const [country, setCountry] = useState([]);

// useEffect(() => {
//     const getCountry = async() => {
//         const rescountry  = await fetch('https://restcountries.com/v3.1/all?fields=name,flags`');
//         const rescon = await rescountry.json();
//         setCountry(await rescon);
//     }
    
//     getCountry();
// }, []);

//   const passwordCriteriaMet = () => {
//     const password =watch ('password');
//     const criteriaMet = [
//       password.length >= 8,
//       /[a-z]/.test(password),
//       /[A-Z]/.test(password),
//       /\d/.test(password),
//       /[@$!%*?&]/.test(password),
//     ];

//     return criteriaMet;
//   };

//   const getValidationIcon = (field) => {
//     if (field === 'password') {
//       return errors[field] ? image4Invalid : image4Valid;
//     }
//     return null;
//   };

//   const getValidationColor = (field) => (errors[field] ? 'text-red-600' : 'text-green-600');
  return (
    <div>
        <div className='fixed bg-[#329cd1]  w-full z-20 p-5'>
            <div className='flex justify-between px-[10rem] items-center'>
                <Link to={'/'}>
                    <h1 className='font-semibold  text-[28px] text-white'>One Exchange</h1>
                </Link>
                <div>
                    <img src={image} alt="image of the universe" className='w-[2rem]'/>
                </div>
            </div>
        </div>
    <div className='pt-[10rem] text-center'>
        <h1 className='mr-[11.5rem] text-[28px] font-semibold pb-[1rem]'>Welcome to One Exchange</h1>
        <div className='border bg-[#fffefe] border-[#ededed] rounded-lg mx-[35rem]'>
            <div className='text-start ml-[7.5rem]'>
                <div className='flex items-center gap-[3rem] ml-[3rem] pt-[2rem] pb-[1rem]'>
                    <Link to={'/loginPage'}>
                        <p>Sign in</p>
                    </Link>
                    <Link to={'/signupPage'} className='relative'>
                        <p className=''>Create an account</p>
                        <div className='hover:border-t-[3px] hover:border-black hover:w-[10.5rem] hover:absolute top-[12rem]'></div>
                    </Link>
                </div>
                    <div className='border-t-[2px] border-black w-[20rem] ml-[rem pb-[2rem]'></div>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div>
                        {/* <label htmlFor="Country">Country / Region of residence</label>

                        <select name="country" className='w-[10rem] border outline-none'>
                            <option value=""></option>
                            {
                                country.map((getcon, index) =>(
                                    <option key={index} value={getcon.id}>{getcon.name}</option>
                                ))
                            }
                        </select> */}
                        <label htmlFor='country' className='my-[2rem]'> Country / Region of residence </label>
                        <div className='relative'>
                            <input type="text" className={`border rounded-md outline-none py-[.4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                errors.country ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register ('country')}
                            />
                            <img src={image3} alt="icon of arrow down" className='absolute top-5 w-[1rem] right-[8em]'/>
                            <p className='mb-[1rem] text-[12px] text-red-600'>{errors.country?.message}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='text'>Your email address</label>
                        <div>
                            <input type="text" className={`border rounded-md outline-none py-[.4rem] px-[4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register ('email')}
                            />
                            <img src={image3} alt="icon of arrow down" className='absolute top-5 w-[1rem] right-[8em]'/>
                            <p className='mb-[1rem] text-[12px] text-red-600'>{errors.email?.message}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='text'>Password </label>
                        <div>
                            <div className='relative'>
                                <input type= {showPassword ? 'text' : 'password'} className={`border rounded-md outline-none py-[.4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                    errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                {...register ('password')}
                                />
                                <p className='mb-[1rem] text-[12px] text-red-600'>{errors.password?.message}</p> 
                                <img className='w-[1rem] absolute top-5 right-[7.5rem]'
                                src={showPassword ? image1 : image2}
                                alt='Toggle password visibility'
                                onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                        {checkPasswordCriteria()}
                    </div>
                    <div>
                        <label htmlFor='text'>Confirm Password</label>
                        <div className='relative'>
                            <input type= {showPassword ? 'text' : 'password'} className={`border rounded-md outline-none py-[.4rem] pr-[9.5rem] pl-2 mt-[.5rem] mb-[.5rem] ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            {...register ('confirmpassword')}
                            />
                            <p className='mb-[1rem] text-[12px] text-red-600'>{errors.confirmpassword?.message}</p> 
                        </div>
                    </div>
                    <input type="submit" value='Continue' className='border py-[.5rem] px-[7.8rem] bg-[#3dbeff] rounded-[.5rem] text-[16px] hover:bg-[#3dbeff] hover:text-white mb-[2rem]'/>
                </form>
            </div>
        </div>
    </div>
    <div className='py-[4rem]'>
        <div className='text-[10px] font-light px-[10rem]'>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere excepturi perferendis dignissimos, tempore rem sunt optio eveniet sed quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum earum eligendi cupiditate, corrupti sunt laboriosam nihil placeat ullam quasi!</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus expedita, dignissimos odit iure asperiores ratione voluptatum eos quas porro dolores molestiae corporis, aperiam amet unde modi ipsam optio sint! Cumque eum beatae et commodi, quos placeat soluta, culpa repellat, necessitatibus atque quidem! Consequatur nostrum voluptatibus ipsam, illum ullam odio!</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit eaque! Cum nihil hic praesentium aperiam quasi ratione delectus laboriosam ducimus ullam, quod dolores quam culpa quo commodi tempora quia. Eos ut eaque itaque ex ducimus ad cum, sit, maiores modi consequatur perspiciatis vitae eum, laboriosam dicta libero voluptates laudantium.</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus eaque praesentium rerum inventore quaerat tenetur, pariatur mollitia ad consequatur.</p>
            <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis!</p>
            <p className='pb-[3rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ea est perferendis culpa. Recusandae placeat quis exercitationem incidunt consequatur mollitia blanditiis quos perspiciatis fuga. Repudiandae tenetur cum perspiciatis deserunt velit id nobis quisquam, impedit voluptatum autem? Porro, nisi quam?</p>
        </div>
        <div className='border-t-[1px] border-gray-350 w-[84.5rem] ml-[10rem] flex justify-between text-[13px]'>
            <div className='flex gap-[3rem] pt-[1rem]'>
                <p>Privacy Agreement</p>
                <p>Risk Disclosure</p>
                <p>Preventing Money Laundering</p>
                <p>Privacy Policy</p>
                <p>Sercurity instructions</p>
                <p>Legal Documents</p>
            </div>
            <div className='pt-[1rem]'>
                <p>&copy; 2020-2024. One Exchange</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignupPage