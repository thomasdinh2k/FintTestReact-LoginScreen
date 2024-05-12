import { Link } from "react-router-dom"

export default function NavItemTitle({ title, icon, hasItem, link }) {
	return (
		<Link to={link}>
			<i className={icon}></i>
			<span className="nav__list-text">{title}</span>
			{hasItem && <i className="arrow down" />}
		</Link>
	)
}