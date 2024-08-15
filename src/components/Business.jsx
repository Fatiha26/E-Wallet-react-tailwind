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
     <div className="py-16 px-28 ">
     <h1 className='text-center text-3xl md:text-5xl font-semibold'><span className="text-purple-700">eWallet</span> for Business</h1>
     <p className="text-center text-md md:text-lg mt-6">The diverse range of financial solutions offered by e-wallet ensures fast, easy and safe<br/>
        transactions for your business. Make your day-to-day operations more efficient with e-wallet.
     </p>
        <div className="flex items-center justify-between pt-32">
            <div className="grid grid-cols-3 gap-8 items-center">
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                     <FaCartArrowDown className="text-purple-500 text-[8rem]"/>
                     <p>Online business</p>
                   </div>
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                     <MdWork className="text-purple-500 text-[8rem]"/>
                     <p>Merchent</p>
                   </div>
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                      <FaHouseChimney className="text-purple-500 text-[8rem]"/>
                      <p>Educational Institutions</p>
                   </div>
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                      <GiFamilyHouse className="text-purple-500 text-[8rem]"/>
                      <p>Enterprise</p>
                   </div>
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                   </div>
                   <div className="shadow shadow-slate-400 p-6 cursor-pointer text-center">
                   </div>

                  <FaPrayingHands className="text-purple-500 text-[8rem]"/>
                  <IoIosArrowForward className="text-purple-500 text-[8rem]"/>
            </div>
            <div className="absolute right-8">
               <img src={bg2} alt="" className="w-[600px]"/>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default Business
