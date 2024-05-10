import { Link } from "react-router-dom"
import "./NavBar.scss"
import NavSection from "./NavSection/Index"

import navItem from  "../../../../data/nav-item.json"

const NavBar = () => {
	

	
	return (
		<>
			<nav className="active">
				{/* Nav Header */}
				<div> 
					<div className="nav-toggle">
						<i className="arrow left" />
					</div>
					<div className="head">
						<h1>Hello World</h1>
						<p>FintSoftVN</p>
						<p className="mini">
							<strong>FINT</strong>
							<br />
							SoftVN
						</p>
					</div>
				</div>

				<NavSection title="Chính" items={navItem}/>
				{/* <NavSection title="Setting"/> */}
				

				
			</nav>
		</>
	)
}

export default NavBar
