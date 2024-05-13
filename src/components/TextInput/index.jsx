import TextInputError from "./TextInputError"

export default function TextInputForm({
	icon,
	required,
	error,
	errorMsg,
	...otherProperties
}) {
	return (
		<div className="form-group">
			<input
				className={`form-control ${error ? "error" : ""}`}
				{...otherProperties}
				// name={name}
				// type={type}
				// placeholder={placeholder}
				// value={value}
				// onChange={onChange}
			/>

			<div className={`pre-placeholder-icon ${required ? "required" : ""}`}>
				{icon}
			</div>

			{error && <TextInputError>{errorMsg}</TextInputError>}
		</div>
	)
}
