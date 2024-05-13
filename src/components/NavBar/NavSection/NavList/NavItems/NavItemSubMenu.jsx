import React from "react"

export default function NavItemSubMenu({ subMenu, isOpen }) {
	
	// console.log(subMenu);
	// nav__list-submenu ${isOpen && "show"}}
	return (
		<ul className={`nav__list-submenu ${isOpen ? "show" : ""}`}>
				{subMenu.map((subItem, index) => {
					return (
						<li key={index}>
							<a href="#"> {subItem.name} </a>
						</li>
					)
				})}
		</ul>
	)
}