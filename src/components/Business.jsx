import { FaCartArrowDown } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { FaPrayingHands } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import bg2 from "../assets/image/bg2.png";

const Business = () => {
  return (
    <>
     <div className="py-16 px-28">
     <h1 className='text-center text-3xl md:text-5xl font-semibold'><span className="text-purple-700">eWallet</span> for Business</h1>
     <p className="text-center text-md md:text-lg mt-6">The diverse range of financial solutions offered by e-wallet ensures fast, easy and safe<br/>
        transactions for your business. Make your day-to-day operations more efficient with e-wallet.
     </p>
        <div className="flex items-center justify-center gap-12">
            <div className="grid grid-cols-3 gap-20 items-center">
                  <FaCartArrowDown className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
                  <MdWork className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
                  <FaHouseChimney className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
                  <GiFamilyHouse className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
                  <FaPrayingHands className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
                  <IoIosArrowForward className="text-purple-500 text-[8rem] shadow shadow-slate-400 p-8 cursor-pointer"/>
            </div>
            <div className="ml-12">
               <img src={bg2} alt="" className="w-auto"/>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default Business
