import React from "react"

export default function NavItemSubMenu({ subMenu }) {
	// console.log(subMenu);
	return (
		<ul className="nav__list-submenu show">
			<li>
				{subMenu.map((subI, sIndex) => {
					console.log(subI)

					return <a key={sIndex} href="#"> {subI.name} </a>
				})}
			</li>
		</ul>
	)
}
