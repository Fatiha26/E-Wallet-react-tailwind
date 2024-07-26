import { Link } from "react-router-dom";

const NavLinks = () => {
    const links = [{name:"About",
                    submenu:true,
                    sublinks:[
                        {
                            sublink: [
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                            ],
                        },
                        {
                            sublink: [
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                            ],
                        },
                        {
                            sublink: [
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                                {name:'one', link:"/"},
                            ],
                        },
                    ]
    },
                   {name: "Business"},
                   {name: "Help"},
                   {name: "Career"},
                   {name: "Blog"},
                   {name: "Campaigns"},
                ];
  return (
    <>
     {
        links.map((link,index)=>(
            <div key={index}>
                <div className="px-3 text-left md:cursor-pointer group">
                    <h1 className="py-7 ">
                        {link.name}
                    </h1>
                    {link.submenu && (
                        <div>
                            <div className="absolute top-20 hidden group-hover:block hover:block">
                             <div className="py-3">
                              <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                             </div>
                                <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                    {
                                        link.sublinks.map((mySub,index)=>(
                                            <div key={index}>
                                                {mySub.sublink.map((slink,index)=>(
                                                    <li key={index} className="text-sm text-gray-600 my-2.5">
                                                     <Link to={slink.link}>{slink.name}</Link>
                                                    </li>
                                                 ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    )}

                </div>
            </div>
        ))}
      
    </>
  )
}

export default NavLinks
