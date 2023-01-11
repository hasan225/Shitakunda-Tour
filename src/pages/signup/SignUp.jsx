import React from 'react'
import Hero from '../../components/Hero/Hero'
import bg from "../../assets/img/img3.jpg";

const SignUp = () => {
  return (
    <div className='sign-up'>
      <Hero bg={bg} classes={"h-[60vh]"} heading={"Sign Up"}/>
    </div>
  )
}

export default SignUp