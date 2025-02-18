import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { SiNamecheap } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
// import { FaCommentAlt } from "react-icons/fa";
import { Textarea } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import { useDispatch } from "react-redux";


function Contact() {
  const dispatch = useDispatch()
  const handleEnquiry = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
  }
  return (
    <div className="w-full bg-gray-200">
      {/* <HelmetTitle title="Contact" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Contact" />
      </div> */}


      {/* <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7144.799359844576!2d80.28250410000001!3d26.44284270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47e7eb728e3d%3A0x4eeaaae900a2b383!2sRatan%20Lal%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722073104503!5m2!1sen!2sin" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" className ="w-full" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

      <div className="grid lg:grid-cols-2 lg:gap-0 gap-16 grid-cols-1 my-5 bg-white rounded-md lg:px-10 md:px-12 px-4 lg:py-10 py-8">
        <form className="grid gap-5" onSubmit={handleEnquiry}>
          <h1 className="text-3xl font-semibold capitalize">contact</h1>
          <div className="lg:w-96">  
          <Input label="Name" icon={<SiNamecheap size={20} />} name="name"/>
          </div>
          <div className="lg:w-96">  
          <Input label="Email" icon={<MdMarkEmailRead size={20} />} name="email"/>
          </div>
          <div className="lg:w-96">  
          <Input label="Phone" icon={<FaPhone size={20} />} name="mobile" />
          </div>
          <div className="lg:w-96">  
          <Textarea label="Comment" name="comment"/>
          </div>
          <Button className="w-36" type="submit">Send</Button>
        </form>

        <div className="flex flex-col gap-4 text-sm">
        <h1 className="text-3xl font-semibold capitalize">get in touch with us</h1>
        <div className="flex items-center gap-5">
          <FaHome size={25}/>
          <address className="text-gray-500">33 block Barra-8 kidwai nagar , near sector-12 ,INDIA 203562</address> 
        </div>
        <div className="flex items-center gap-5">
          <IoMdCall size={25}/>
          <a href="tel:+91 8318706210" className="text-blue-800">+91 8545621320</a> 
        </div>
        <div className="flex items-center gap-5">
          <MdEmail size={25}/>
          <a href="mailto:anuragsonkar053@gmail.com" className="text-blue-800">anuragsonkar053@gmail.com</a> 
        </div>
        <div className="flex items-center gap-5">
          <FaInfo size={25}/>
          <p className="text-gray-500">Monday - Friday 10AM - 8PM</p> 
        </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
