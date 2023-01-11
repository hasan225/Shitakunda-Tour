import React from 'react'
import Hero from '../../components/Hero/Hero'
import bg from "../../assets/img/img4.jpg";
import ContactForm from '../../components/ContactForm/ContactForm';


const Contact = () => {
  return (
   <div className='contact'>
     <Hero bg={bg} classes={"h-[60vh]"} heading={"Contact"}/>
     <section className='Section'>
     <ContactForm/>
     </section>
   </div>
  )
}

export default Contact