import React from "react"
import NavItems from "./NavItems/Index"

export default function NavList({ items }) {
	
    
    
    return (
        
		<ul className="nav-list">
			{items.map( (i, iIndex) => { 
                
                // console.log(i.subMenu);

                return (
                    <NavItems key={iIndex} title={i.name} subMenu={i.subMenu}/>
                )
             })}
		</ul>
	)
}
