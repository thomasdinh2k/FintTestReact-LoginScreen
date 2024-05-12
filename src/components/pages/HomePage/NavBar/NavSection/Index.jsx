import NavList from "./NavList/Index"

export default function NavSection({ title, items }) {
	return (
		<div className="nav__section">
			<p className="nav__section-title">{title}</p>
			<NavList items={items} />
		</div>
	)
}