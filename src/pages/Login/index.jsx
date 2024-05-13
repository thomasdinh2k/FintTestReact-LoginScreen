import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
//
import TextInputForm from "../../components/TextInput"
import Wrapper from "../../components/Wrapper"
import Button from "../../components/Button"
import TextInputError from "../../components/TextInput/TextInputError"

export default function LoginScreen() {
	const minCharRequired = 3

	const [username, setUsername] = useState({
		value: "",
		error: false,
		err_msg: "",
	})
	const [password, setPassword] = useState({
		value: "",
		error: false,
		err_msg: "",
	})
	const [isStartTyping, setIsStartTyping] = useState(false)

	const clearErrMsg = modifier => {
		if (modifier == "username") {
			setUsername(prevState => ({
				...prevState,
				err_msg: "",
				error: false,
			}))
		} else {
			setPassword(prevState => ({
				...prevState,
				err_msg: "",
				error: false,
			}))
		}
	}

	const handleInputChange = (modifier, event) => {
		if (event.target.value.length > 0) {
			setIsStartTyping(true)
		}

		if (isStartTyping) {
			if (event.target.value.length == 0) {
				if (modifier == "username") {
					setUsername(prevState => ({
						...prevState,
						err_msg: "Vui lòng nhập username!",
						error: true,
					}))
				} else {
					setPassword(prevState => ({
						...prevState,
						err_msg: "Vui lòng nhập mật khẩu!",
						error: true,
					}))
				}
			} else if (event.target.value.length > minCharRequired) {
				clearErrMsg(modifier)
			}
		}

		if (modifier == "username") {
			setUsername(prevState => ({ ...prevState, value: event.target.value }))
		} else {
			setPassword(prevState => ({ ...prevState, value: event.target.value }))
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (username.value.length < minCharRequired) {
			setUsername(prevState => ({
				...prevState,
				error: true,
				err_msg: `Username cần phải từ ${minCharRequired} ký tự trở lên`,
			}))
		} else if (username.value.length >= minCharRequired) {
			setUsername(prevState => ({ ...prevState, error: false }))
		}

		if (password.value.length < minCharRequired) {
			setPassword(prevState => ({
				...prevState,
				error: true,
				err_msg: `Mật khẩu cần phải từ ${minCharRequired} ký tự trở lên`,
			}))
		} else if (username.value.length >= minCharRequired) {
			setPassword(prevState => ({ ...prevState, error: false }))
		}

		console.log([username, password])
	}

	return (
		<Wrapper>
			<div className="header">
				<h2>Mời đăng nhập</h2>
			</div>
			<form className="login-form" action="#">
				<TextInputForm
					icon={<FontAwesomeIcon icon={faUser} />}
					required={true}
					error={username.error}
					errorMsg={username.err_msg}
					
					type="username"
					placeholder="Tài khoản"
					value={username.value}
					onChange={() => handleInputChange("username", event)}
				/>

				<TextInputForm
					icon={<FontAwesomeIcon icon={faLock} />}
					required={true}
					error={password.error}
					errorMsg={password.err_msg}
					
					type="password"
					placeholder="Mật khẩu"
					value={password.value}
					onChange={() => handleInputChange("password", event)}
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
						<Button type="submit" onClick={event => handleSubmit(event)}>
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
