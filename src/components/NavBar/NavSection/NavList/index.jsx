import NavItems from "./NavItems"

export default function NavList({ items }) {
	
	// console.log(items);

	return (
		<ul className="nav-list">
			{items.map((i, iIndex) => {
				return (
					<NavItems
						key={iIndex}
						title={i.name}
						icon={i.icon ?? "fa-solid fa-circle-question"}
						subMenu={i.subMenu}
						link={i.link ?? "#"}
					/>
				)
			})}
		</ul>
	)
}
