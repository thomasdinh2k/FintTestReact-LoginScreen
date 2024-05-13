import "./index.scss"
import NavSection from "./NavSection"

import navItem from "../../data/nav-item.json"
import { useState } from "react"

const NavBar = () => {
	
	const [isOpen, setIsOpen] = useState(true);
	
	const handleToggleNav = () => {
		setIsOpen(!isOpen)
	}
	
	return (
		<>
			<nav className={isOpen ? "active" : "closed"}>
				{/* Nav Header */}
				<div>
					<div className="nav-toggle" onClick={handleToggleNav}>
						<i className={`arrow ${isOpen ? "left" : "right"}`} />
					</div>
					<div className="head">
						<h1>Hello World</h1>
						<p>FintSoftVN</p>
					</div>
				</div>
				{Object.entries(navItem).map(([menuName, items]) => (
					<NavSection key={menuName} title={menuName} items={items}/>
				))}
			</nav>
		</>
	)
}

export default NavBar
