import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
//
import TextInputForm from "../../components/TextInput"
import Wrapper from "../../components/Wrapper"
import Button from "../../components/Button"

export default function LoginScreen() {
	return (
		<Wrapper>
			<div className="header">
				<h2>Mời đăng nhập</h2>
			</div>
			<form className="login-form" action="#">
				<TextInputForm
					type="username"
					placeholder="Tài khoản"
					icon={<FontAwesomeIcon icon={faUser} />}
				/>

				<TextInputForm
					type="password"
					placeholder="Mật khẩu"
					icon={<FontAwesomeIcon icon={faLock} />}
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
						<Button type="submit">
							<Link to="/home">Đăng nhập</Link>
						</Button>
						
					</div>
				</div>
				<div id="form-4" className="form-group">
					<div className="sign-up">
						Chưa có tài khoản?
						<Link to="/sign-up">Đăng ký</Link>
					</div>
					<div className="forgot">
						<a href="#" style={{cursor:"not-allowed"}}>Quên mật khẩu</a>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}