import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function TextInputForm({
	type,
	name,
	placeholder,
	required,
	icon
}) {
	return (
		<div className="form-group">
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				className="form-control"
			/>

			<div className={`pre-placeholder-icon ${required ? "required" : ""}`}>
				{icon}
			</div>
		</div>
	)
}
