import { FC } from "react"
import { FaWhatsapp } from "react-icons/fa6";
interface formSectionProps {}

const FormSection :FC<formSectionProps> = () => {
return (
<div className="flex justify-center items-center">


<div className=" grid grid-cols-1 md:gap-32 md:grid-cols-2 pt-20 pb-20  px-10 ">
    <div>
        <p className="text-3xl text-center font-extrabold text-sky-900 leading-7 pb-4">Message Us</p>
<form className="">
  <div className="relative z-0  mb-5 group">
      <input type="text" name="name" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" required />
  </div>
  <div className="relative z-0 mb-5 group">
      <input type="email" name="email" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" required />
  </div>
  <div className="relative z-0  mb-5 group">
      <input type="number" name="phoneNumber" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone" required />
  </div>

  <textarea id="message" name="message" rows={4} className="block  hover:border-blue-500  border-2 peer p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Message..."></textarea>

  <label className="block mb-2 text-sm  text-gray-900 dark:text-white pt-5" htmlFor="user_avatar">Upload file</label>
  <input className="block text-sm text-gray-900 border:none  rounded-lg cursor-pointer " aria-describedby="user_avatar_help" id="user_avatar" type="file" />

  <button type="submit" className="block py-2.5 px-16 text-sm bg-sky-900  text-white   font-semibold rounded-[12px] mt-8 ">Send Message</button>
</form>
    </div>
    

    <div className="flex   pt-16 md:pt-0 flex-col gap-10">
        <div className="flex flex-col gap-4">
            <p className="font-black text-[20px] leading-5 text-sky-900">Email:</p>
            <p className="text-gray-700 text-lg leading-4">info@bawdicsoft.com</p>
        </div>
        <div className="flex flex-col gap-4">
            <p className="font-black text-[20px] leading-5 text-sky-900">Phone:</p>
            <p className="text-gray-700 text-lg ">‪+1 (315) 888-2117‬</p>
            <a href="/" className="bg-sky-900 py-2 hover:bg-sky-700  rounded-[8px] flex justify-center gap-2 md:gap-4 w-[180px] md:w-[220px] items-center"><FaWhatsapp className="text-white font-bold  text-[20px] md:text-[30px] "/><span className="text-white font-bold text-16px md:text-[18px]">For Whatsapp</span></a>
        </div>
        <div className="flex flex-col gap-4">
            <p className="font-black text-[20px] leading-5 text-sky-900">Address:</p>
            <p className="text-gray-700 w-[200px] md:w-[400px] text-lg ">Office No.01, Ground Floor, Farzana Building Shaheed-E-Millat Road, Shahrah-E-Faisal, Karachi.</p>
        </div>
    </div>

</div>
</div>)
}
export default FormSection;