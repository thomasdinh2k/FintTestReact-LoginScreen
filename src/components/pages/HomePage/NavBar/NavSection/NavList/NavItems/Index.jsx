import React from "react"
import NavItemTitle from "./NavItemTitle"
import NavItemSubMenu from "./NavItemSubMenu"

export default function NavItems({ title, subMenu }) {
    
	return (
		<li className="nav__list-title">
			<NavItemTitle title={title} />
			<NavItemSubMenu subMenu={subMenu}/>
		</li>
	)
}
