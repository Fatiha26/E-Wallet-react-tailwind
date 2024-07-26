
const NavLinks = () => {
    const links = [{name:"About"},
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
                <div className="px-3 text-left md:cursor-pointer">
                    <h1 className="py-7 ">
                        {link.name}
                    </h1>
                </div>
            </div>
        ))}
      
    </>
  )
}

export default NavLinks
