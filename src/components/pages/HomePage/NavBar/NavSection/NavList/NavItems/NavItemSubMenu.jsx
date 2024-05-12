import React from "react"

export default function NavItemSubMenu({ subMenu }) {
	
	// console.log(subMenu);

	return (
		<ul className="nav__list-submenu show">
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