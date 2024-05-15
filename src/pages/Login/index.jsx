import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
//
import TextInputForm from "../../components/TextInputForm"
import Wrapper from "../../components/Wrapper"
import Button from "../../components/Button"
import { minUsrCharRequired } from "../../utils/formValidationRuleset"

export default function LoginScreen() {
	// Validation Rules
	

	const [formValue, setFormValue] = useState({
		username: { value: "", error: false, err_msg: "" },
		password: { value: "", error: false, err_msg: "" },
	})

	const [isStartTyping, setIsStartTyping] = useState(false)

	// If state: true then disable the submit button
	const [isError, setIsError] = useState(false)
	// Function to check if any error then change `isError` state
	function handleErrorState() {
		if (formValue.username.error || formValue.password.error) {
			setIsError(true)
		} else {
			setIsError(false)
		}
	}
	useEffect(() => {
		handleErrorState()
	}, [formValue])

	const handleInputChange = (identifier, value) => {
		if (value.length > 0) {
			setIsStartTyping(true)
		}

		if (isStartTyping) {
			if (value.length == 0) {
				// Trigger when user clear input
				setFormValue(prevState => ({
					...prevState,
					[identifier]: {
						...prevState[identifier],
						error: true,
						err_msg: `Vui lòng không để trống ${
							identifier.charAt(0).toUpperCase() + identifier.slice(1)
						} !`,
					},
				}))
			}

			if (value.length >= minUsrCharRequired) {
				// De-trigger when user input enough character
				setFormValue(prevState => ({
					...prevState,
					[identifier]: {
						...prevState[identifier],
						error: false,
						err_msg: null,
					},
				}))
			}
		}

		setFormValue(prevState => ({
			...prevState,
			[identifier]: { ...prevState[identifier], value: value },
		}))
	}

	// console.log(formValue)

	const handleSubmit = event => {
		event.preventDefault()

		Object.entries(formValue).forEach(formItem => {
			// console.log(formItem);
			var formLabel = formItem[0]
			var formObject = formItem[1]

			// Display Error: Min char count required
			if (formObject.value.length < minUsrCharRequired) {
				setFormValue(prevState => ({
					...prevState,
					[formLabel]: {
						...prevState[formLabel],
						error: true,
						err_msg: `${
							formLabel.charAt(0).toUpperCase() + formLabel.slice(1)
						} quá ngắn (${formObject.value.length}/${minUsrCharRequired} ký tự)`,
					},
				}))
			}
		})

		if (!isError) {
			console.log("Sending HTTP request")
		}
	}

	const handleOnBlur = identifier => {
		var inputValue = formValue[identifier].value
		// Display Error: Min char count required
		if (inputValue.length < minUsrCharRequired && inputValue.length > 0) {
			setFormValue(prevState => ({
				...prevState,
				[identifier]: {
					...prevState[identifier],
					error: true,
					err_msg: `${
						identifier.charAt(0).toUpperCase() + identifier.slice(1)
					} quá ngắn (${inputValue.length}/${minUsrCharRequired} ký tự)`,
				},
			}))
		}

		// console.log(`OnBlur ${identifier}`, formValue[identifier])
	}

	return (
		<Wrapper moprh={true}>
			<div className="header">
				<h2>Mời đăng nhập</h2>
			</div>
			<form action="#">
				<TextInputForm
					icon={<FontAwesomeIcon icon={faUser} />}
					required={true}
					error={formValue.username.error}
					errorMsg={formValue.username.err_msg}
					type="username"
					placeholder="Tài khoản"
					value={formValue.username.value}
					onChange={event => handleInputChange("username", event.target.value)}
					onBlur={() => {
						handleOnBlur("username")
					}}
				/>

				<TextInputForm
					icon={<FontAwesomeIcon icon={faLock} />}
					required={true}
					error={formValue.password.error}
					errorMsg={formValue.password.err_msg}
					type="password"
					placeholder="Mật khẩu"
					value={formValue.password.value}
					onChange={event => handleInputChange("password", event.target.value)}
					onBlur={() => {
						handleOnBlur("password")
					}}
				/>

				<div id="form-3" className="form-group">
					<div className="save-pwd">
						<label>
							<input type="checkbox" name="save-pwd" id="" />
							Lưu mật khẩu
							<span className="checkmark"></span>
						</label>
					</div>
					<div className="login-button">
						<Button
							type="submit"
							onClick={event => handleSubmit(event)}
							error={isError}
						>
							Đăng nhập
						</Button>
					</div>
				</div>
				<div id="form-4" className="form-group">
					<div className="sign-up">
						Chưa có tài khoản?
						<Link to="/sign-up">Đăng ký</Link>
					</div>
					<div className="forgot">
						<a href="#" style={{ cursor: "not-allowed" }}>
							Quên mật khẩu
						</a>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}
