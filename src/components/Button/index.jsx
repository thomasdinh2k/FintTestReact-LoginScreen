export default function Button({type, children}) {
	return (
		<button className="gradient-button" type={type}>
			{children}
		</button>
	)
}