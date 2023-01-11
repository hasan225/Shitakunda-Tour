import React from "react";
import Input from "../Inputs/Input";

const ContactForm = () => {
  return (
    <>
      <h2 className="Title text-center">Send us a message</h2>
      <form className="shadow-md border mt-12 p-8 rounded-lg flex-middle flex-col w-[50rem] mx-auto gap-6 lg:w-11/12">
        <Input type={"input"} placeholder={"Name"} />
        <Input type={"input"} placeholder={"Email"} />
        <Input type={"input"} placeholder={"Subject"} />
        <textarea className="placeholder-gray-700 w-full p-4 bg-gray-100 border shadow rounded" placeholder="Message" rows="4"></textarea>
      </form>
    </>
  );
};

export default ContactForm;
