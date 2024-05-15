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
import TextInputForm from "../../components/TextInput"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

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
		})

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

		validationRules.forEach(criteria => {
			newValidationStatus[criteria.key] = criteria.regex.test(password)
		})

		setSignUpPasswordValidationStatus(newValidationStatus)
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
						placeholder="Tài khoản"
						required={true}
						error={formValue.username.error}
						errorMsg={formValue.username.err_msg}
						value={formValue.username.value}
						icon={<FontAwesomeIcon icon={faUser} />}
						onChange={event =>
							handleInputChange("username", event.target.value)
						}
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
					/>

					<div id="CTA-buttons">
						<Button>Đăng ký</Button>
						<Link to="/">Quay lại đăng nhập</Link>
					</div>
				</form>
			</Wrapper>
		</div>
	)
}
