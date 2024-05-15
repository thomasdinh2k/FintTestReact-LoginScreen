import "./style.scss"

export default function Wrapper({ children, moprh }) {
	return (
		<div className="theme-root">
			{moprh && (
				<div className="bubbles">
					<div className="bg-shape-1"></div>
					<div className="bg-shape-2"></div>
					<div className="bg-shape-3"></div>
				</div>
			)}
			<img
				src="https://www.fint.vn/wp-content/uploads/2023/11/1626080287-12892745-fint-vn.png"
				alt=""
			/>
			<div className="wrapper">{children}</div>
		</div>
	)
}
