import "./style.scss"

export default function Button({ children, ...otherProperties }) {
	return (
		<button className="gradient-button" {...otherProperties}>
			{children}
		</button>
	)
}
