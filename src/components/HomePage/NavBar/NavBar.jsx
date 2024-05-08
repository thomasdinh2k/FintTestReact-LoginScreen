import NavItems from "./navItems"
import './styles.css';

const NavBar = () => {
	return (
		<>
			<nav className="active">
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
				<div className="nav__menu">
					<p className="nav__menu-title">chính</p>
					<NavItems/>
					
				</div>
				{/* Settings */}
				<div className="nav__menu">
					<p className="nav__menu-title">cài đặt</p>
					<ul className="nav-list">
						<li className="nav__list-title active">
							<a href="#">
								<i className="icon fa-solid fa-gear" />
								<span className="nav__list-text">Settings</span>
							</a>
						</li>
						<li className="nav__list-title active">
							<a href="#">
								<i className="fa-solid fa-arrow-right-from-bracket" />
								<span className="nav__list-text">Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default NavBar
