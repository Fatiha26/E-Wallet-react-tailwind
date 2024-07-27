import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants/link";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-2 px-6 border-transparent hover:border-white border-dotted border-[0.1rem] rounded-3xl"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-[12%] z-1 hidden group-hover:md:block hover:md:block shadow">
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mySub, subIndex) => (
                      <div key={subIndex}>
                        {mySub.sublink.map((slink, sublinkIndex) => (
                          <li key={sublinkIndex} className="text-lg text-black my-2.5 flex items-center mb-8">
                            <img src={slink.img} alt="" className="w-9 mr-4"/>
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          
          {/* for mobile menu */}
          <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
            {/* sublinks */}
            {link.submenu &&
              link.sublinks.map((sublink, subIndex) => (
                <div key={subIndex}>
                  {sublink.sublink.map((slink, sublinkIndex) => (
                    <li key={sublinkIndex} className="text-lg text-black my-2.5 flex items-center mb-4 pl-16 ">
                            <img src={slink.img} alt="" className="w-7 mr-3"/>
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                  ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
