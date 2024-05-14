import "./style.scss"

export default function Button({ children, error, ...otherProperties }) {
	return (
		<button 
			className={`gradient-button ${error && "disabled"}`} {...otherProperties}
			disabled={error}
		>
			{children}
		</button>
	)
}
