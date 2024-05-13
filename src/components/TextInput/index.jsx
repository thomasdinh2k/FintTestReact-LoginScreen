export default function TextInputForm({ icon, required, ...otherProperties }) {
	return (
		<div className="form-group">
			<input
				className="form-control"
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
		</div>
	)
}
