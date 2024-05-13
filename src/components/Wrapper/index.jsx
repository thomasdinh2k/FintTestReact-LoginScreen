export default function Wrapper({ children }) {
	return (
		<div className="theme-root">
			<img
				src="https://www.fint.vn/wp-content/uploads/2023/11/1626080287-12892745-fint-vn.png"
				alt=""
			/>
			<div className="wrapper">{children}</div>
		</div>
	)
}
