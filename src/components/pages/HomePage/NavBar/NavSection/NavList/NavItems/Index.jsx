import React from "react"
import NavItemTitle from "./NavItemTitle"
import NavItemSubMenu from "./NavItemSubMenu"

export default function NavItems({ title, icon, subMenu, link }) {
    

	return (
		<li className="nav__list-title">
			<NavItemTitle 
				title={title} 
				icon={icon}
				hasItem={subMenu.length > 0 && true}
				link={link}
			/>
			<NavItemSubMenu 
				subMenu={subMenu}
			/>
		</li>
	)
}