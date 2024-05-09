import React from "react"

export default function NavItems() {
	return (
		<>
			<ul className="nav-list">
				<li className="nav__list-title active">
					<a href="#">
						<i className="icon fa-regular fa-bookmark" />
						<span className="nav__list-text">Home</span>
					</a>
				</li>
				<li className="nav__list-title">
					<a href="#">
						<i className="fa-regular fa-bookmark" />
						<span className="nav__list-text">About</span>
						<i className="arrow down" />
					</a>
					<ul className="nav__list-submenu ">
						<li>
							<a href="#">About 1 </a>
							<a href="#">About 1 </a>
							<a href="#">About 1 </a>
						</li>
					</ul>
				</li>
				<li className="nav__list-title active">
					<a href="#">
						<i className="fa-regular fa-bookmark" />
						<span className="nav__list-text">Blog</span>
					</a>
				</li>
				<li className="nav__list-title ">
					<a href="#">
						<i className="fa-regular fa-bookmark" />
						<span className="nav__list-text">Finance</span>
						<i className="arrow down" />
					</a>
					<ul className="nav__list-submenu show">
						<li>
							<a href="#">Earning </a>
							<a href="#">Funds </a>
							<a href="#">Declines </a>
							<a href="#">Payouts </a>
						</li>
					</ul>
				</li>
				<li className="nav__list-title ">
					<a href="#">
						<i className="fa-regular fa-bookmark" />
						<span className="nav__list-text">Yet Another</span>
					</a>
				</li>
				<li className="nav__list-title ">
					<a href="#">
						<i className="fa-regular fa-bookmark" />
						Another Another
					</a>
				</li>
			</ul>
		</>
	)
}
