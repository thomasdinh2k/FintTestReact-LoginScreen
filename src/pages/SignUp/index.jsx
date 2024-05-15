import { useState } from "react"
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
	const handleInputChange = (identifier, value) => {
		setFormValue(prevState => ({
			...prevState,
			[identifier]: {
				...prevState[identifier],
				value: value,
			},
		}))

		if (identifier == "password") {
			validateSignUpPassword(value)
		}
	}

	const [formValue, setFormValue] = useState({
		"username": { value: "", error: false, err_msg: "" },
		"password": { value: "", error: false, err_msg: "" },
		"re-pwd": { value: "", error: false, err_msg: "" },
		"email": { value: "", error: false, err_msg: "" },
		"phone": { value: "", error: false, err_msg: "" },
	})

	const [signUpPasswordValidationStatus, setSignUpPasswordValidationStatus] =
		useState({
			letter: false,
			capital: false,
			number: false,
			length: false,
			special: false,
			isAllValid: false,
		})

	

	// If allClear, then the form is ready to be submitted
	const [allClear, setAllClear] = useState(false)

	// Handle Blur
	const handleBlur = identifier => {
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

		switch (identifier) {
			case "username":
				if (formValue.username.value.length <= minUsrCharRequired) {
					setErrMsg(
						identifier,
						`Tài khoản phải có > ${minUsrCharRequired} ký tự`
					)
				} else {
					clearErrMsg(identifier)
				}
				break

			case "password":
				if (!signUpPasswordValidationStatus.isAllValid) {
					setErrMsg(identifier, "Mật khẩu chưa hợp lệ, vui lòng kiểm tra lại")
				} else {
					clearErrMsg(identifier)
				}

				break

			case "re-pwd":
				if (formValue.password.value !== formValue["re-pwd"].value) {
					setErrMsg(identifier, "Mật khẩu nhập lại không khớp")
				} else {
					clearErrMsg(identifier)
				}
				break

			case "email":
				{
					let regexResult = emailRegex.test(formValue.email.value)
					if (!regexResult) {
						setErrMsg(
							identifier,
							"Hãy nhập email đúng định dạng [someone@example.com] "
						)
					} else {
						clearErrMsg(identifier)
					}
				}
				break
			case "phone":
				{
					let regexResult = phoneNumberRegex.test(formValue.phone.value);
					if (!regexResult) {
						setErrMsg(identifier, "Hãy nhập số điện thoại đúng định dạng [+84123456789]")
					} else {
						clearErrMsg(identifier)
					}
				}
				break
			default:
				break
		}
	}

	// Using Regex for Pwd validation
	const validateSignUpPassword = password => {
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
