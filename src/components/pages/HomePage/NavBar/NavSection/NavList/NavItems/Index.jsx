import React, { useState } from "react"
import NavItemTitle from "./NavItemTitle"
import NavItemSubMenu from "./NavItemSubMenu"

export default function NavItems({ title, icon, subMenu, link }) {
    
	const [isOpen, setIsOpen] = useState(false);
	const handleToggleSubMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<li className="nav__list-title">
			<NavItemTitle 
				title={title} 
				icon={icon}
				hasItem={subMenu.length > 0 && true}
				link={link}
				isOpen={isOpen}
				toggleSubMenu={handleToggleSubMenu}
			/>
			<NavItemSubMenu 
				subMenu={subMenu}
				isOpen={isOpen}
			/>
		</li>
	)
}