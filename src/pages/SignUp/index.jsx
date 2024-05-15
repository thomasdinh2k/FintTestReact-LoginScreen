import { useState, useEffect } from "react"
import Wrapper from "../../components/Wrapper"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faInbox,
	faLock,
	faPhone,
	faUser,
} from "@fortawesome/free-solid-svg-icons"
import TextInputForm from "../../components/TextInputForm"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import {
	minUsrCharRequired,
	emailRegex,
	phoneNumberRegex,
} from "../../utils/formValidationRuleset"

export default function SignUpScreen() {
	const [formValue, setFormValue] = useState({
		"username": { value: "", error: false, err_msg: "" },
		"password": { value: "", error: false, err_msg: "" },
		"re-pwd": { value: "", error: false, err_msg: "" },
		"email": { value: "", error: false, err_msg: "" },
		"phone": { value: "", error: false, err_msg: "" },
	})

	// If allClear, then the form is ready to be submitted, hence re-enabled submit button (disable as default)
	const [allClear, setAllClear] = useState(false)
	useEffect(() => {
		setAllClear(
			Object.values(formValue).every(field => {
				return !field.error && field.value.trim() !== ""
			})
		)
	}, [formValue])

	const [signUpPasswordValidationStatus, setSignUpPasswordValidationStatus] =
		useState({
			letter: false,
			capital: false,
			number: false,
			length: false,
			special: false,
			isAllValid: false,
		})

	const setErrMsg = (identifier, msg) => {
		setFormValue(prevState => ({
			...prevState,
			[identifier]: {
				...prevState[identifier],
				error: true,
				err_msg: msg,
			},
		}))
	}

	const clearErrMsg = identifier => {
		setFormValue(prevState => ({
			...prevState,
			[identifier]: {
				...prevState[identifier],
				error: false,
				err_msg: ``,
			},
		}))
	}

	// Form Fields Validation Check
	const userNameValidation = value => {
		if (value.length <= minUsrCharRequired) {
			setErrMsg("username", `Tài khoản phải có > ${minUsrCharRequired} ký tự`)
		} else {
			clearErrMsg("username")
		}
	}

	const emailValidation = value => {
		let regexResult = emailRegex.test(value)
		if (!regexResult) {
			setErrMsg("email", "Hãy nhập email đúng định dạng [someone@example.com] ")
		} else {
			clearErrMsg("email")
		}
	}

	const phoneValidation = value => {
		let regexResult = phoneNumberRegex.test(value)
		if (!regexResult) {
			setErrMsg("phone", "Hãy nhập số điện thoại đúng định dạng [+84123456789]")
		} else {
			clearErrMsg("phone")
		}
	}

	// Using Regex for Pwd validation
	const passwordValidation = password => {
		const validationRules = [
			{ key: "letter", regex: /[a-z]/ },
			{ key: "capital", regex: /[A-Z]/ },
			{ key: "number", regex: /[0-9]/ },
			{ key: "length", regex: /.{8,}/ },
			{ key: "special", regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/ },
		]

		const newValidationStatus = {}

		var validCount = 0 // Check if all of criteria is valid

		validationRules.forEach(criteria => {
			if (criteria.regex.test(password)) {
				newValidationStatus[criteria.key] = criteria.regex.test(password)
				validCount++
			}
		})

		setSignUpPasswordValidationStatus(newValidationStatus)

		// Check if all valid
		var isAllValid = validCount == validationRules.length
		setSignUpPasswordValidationStatus(prevState => ({
			...prevState,
			isAllValid: isAllValid,
		}))

		if (!isAllValid) {
			setErrMsg("password", "Mật khẩu chưa hợp lệ, vui lòng kiểm tra lại")
		} else {
			clearErrMsg("password")
		}
	}

	// Handle Blur
	const handleBlur = identifier => {
		switch (identifier) {
			case "username":
				userNameValidation(formValue.username.value)
				break

			case "password":
				passwordValidation(formValue.password.value)
				break

			case "re-pwd":
				if (formValue.password.value !== formValue["re-pwd"].value) {
					setErrMsg(identifier, "Mật khẩu nhập lại không khớp")
				} else {
					clearErrMsg(identifier)
				}
				break

			case "email":
				emailValidation(formValue.email.value)
				break
			case "phone":
				phoneValidation(formValue.phone.value)
				break
			default:
				break
		}
	}

	const handleInputChange = (identifier, value) => {
		setFormValue(prevState => ({
			...prevState,
			[identifier]: {
				...prevState[identifier],
				value: value,
			},
		}))

		switch (identifier) {
			case "username":
				userNameValidation(value)
				break

			case "password":
				passwordValidation(value)
				break

			case "email":
				emailValidation(value)
				break
			case "phone":
				phoneValidation(value)
				break

			default:
				break
		}
	}

	return (
		<div className="SignUpScreen">
			<Wrapper moprh={true}>
				<div className="header">
					<h2>Mời đăng ký</h2>
				</div>
				<form action="#">
					<TextInputForm
						name="username"
						type="input"
						placeholder={`Tài khoản (tối thiểu ${minUsrCharRequired} ký tự)`}
						min={minUsrCharRequired}
						required={true}
						error={formValue.username.error}
						errorMsg={formValue.username.err_msg}
						isValid={
							formValue.username.value.length > 0 && !formValue.username.error
						}
						value={formValue.username.value}
						icon={<FontAwesomeIcon icon={faUser} />}
						onChange={event =>
							handleInputChange("username", event.target.value)
						}
						onBlur={() => handleBlur("username")}
					/>

					<TextInputForm
						name="password"
						type="password"
						placeholder="Mật khẩu"
						icon={<FontAwesomeIcon icon={faLock} />}
						validation_type={"password"}
						validation_status={signUpPasswordValidationStatus}
						required={true}
						error={formValue.password.error}
						errorMsg={formValue.password.err_msg}
						value={formValue.password.value}
						onChange={event =>
							handleInputChange("password", event.target.value)
						}
						isValid={signUpPasswordValidationStatus.isAllValid}
						onBlur={() => handleBlur("password")}
					/>

					<TextInputForm
						name="re-pwd"
						type="password"
						placeholder="Nhập lại mật khẩu"
						icon={<FontAwesomeIcon icon={faLock} />}
						required={true}
						error={formValue["re-pwd"].error}
						errorMsg={formValue["re-pwd"].err_msg}
						value={formValue["re-pwd"].value}
						onChange={event => handleInputChange("re-pwd", event.target.value)}
						isValid={
							signUpPasswordValidationStatus.isAllValid &&
							formValue.password.value == formValue["re-pwd"].value
						}
						onBlur={() => handleBlur("re-pwd")}
					/>

					<div className="divider"></div>

					<TextInputForm
						name="email"
						type="input"
						placeholder="Email"
						icon={<FontAwesomeIcon icon={faInbox} />}
						value={formValue.email.value}
						error={formValue.email.error}
						errorMsg={formValue.email.err_msg}
						onChange={event => handleInputChange("email", event.target.value)}
						isValid={formValue.email.value.length > 0 && !formValue.email.error}
						onBlur={() => {
							handleBlur("email")
						}}
					/>

					<TextInputForm
						name="phone"
						type="number"
						placeholder="Số điện thoại"
						icon={<FontAwesomeIcon icon={faPhone} />}
						value={formValue.phone.value}
						error={formValue.phone.error}
						errorMsg={formValue.phone.err_msg}
						isValid={formValue.phone.value.length > 3 && !formValue.phone.error}
						onChange={event => handleInputChange("phone", event.target.value)}
						onBlur={() => {
							handleBlur("phone")
						}}
					/>

					<div id="CTA-buttons">
						<Button error={!allClear}>Đăng ký</Button>
						<Link to="/">Quay lại đăng nhập</Link>
					</div>
				</form>
			</Wrapper>
		</div>
	)
}
