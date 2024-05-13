import NavItems from "./NavItems"

export default function NavList({ items }) {
	
	// console.log(items);

	return (
		<ul className="nav-list">
			{items.map((item, index) => {
				return (
					<NavItems
						key={index}
						title={item.name}
						icon={item.icon ?? "fa-solid fa-circle-question"}
						subMenu={item.subMenu}
						link={item.link ?? "#"}
					/>
				)
			})}
		</ul>
	)
}
