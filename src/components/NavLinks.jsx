
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
                <div>
                    <h1>
                        {link.name}
                    </h1>
                </div>
            </div>
        ))}
      
    </>
  )
}

export default NavLinks
