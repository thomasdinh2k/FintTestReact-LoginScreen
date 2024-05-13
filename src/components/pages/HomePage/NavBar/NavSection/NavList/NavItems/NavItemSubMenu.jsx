import React from "react"

export default function NavItemSubMenu({ subMenu, isOpen }) {
	
	// console.log(subMenu);
	// nav__list-submenu ${isOpen && "show"}}
	return (
		<ul className={`nav__list-submenu ${isOpen ? "show" : ""}`}>
				{subMenu.map((subI, sIndex) => {
					return (
						<li key={sIndex}>
							<a href="#"> {subI.name} </a>
						</li>
					)
				})}
		</ul>
	)
}