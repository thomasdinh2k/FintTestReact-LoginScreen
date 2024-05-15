import TextInputError from "./TextInputError"
import ValidationBox from "./ValidationBox"
import "./styles.scss"

export default function TextInputForm({
	icon,
	required,
	error,
	errorMsg,
	isValid,
	validation_type,
	validation_status,
	...otherProperties
}) {
	return (
		<div className="form-group">
			<input
				className={`form-control ${error ? "error" : ""} ${isValid ? "valid" : ""}`}
				required={required}
				{...otherProperties}
			/>

			<div className={`pre-placeholder-icon ${required ? "required" : ""}`}>
				{icon}
			</div>

			{error && <TextInputError>{errorMsg}</TextInputError>}

			{validation_type != null && (
				<ValidationBox
					validation_type={validation_type}
					validation_status={validation_status}
				/>
			)}
		</div>
	)
}
