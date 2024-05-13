import Wrapper from "../../components/Wrapper"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faInbox,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons"
import TextInputForm from "../../components/TextInput"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

export default function SignUpScreen() {
	return (
		<div className="sign-up">
			<Wrapper>
				<div className="header">
					<h2>Mời đăng ký</h2>
				</div>
				<form className="login-form" action="#">
					<TextInputForm
						name="username"
						type="input"
						placeholder="Tài khoản"
						icon={<FontAwesomeIcon icon={faUser} />}
					/>

					<TextInputForm
						name="email"
						type="input"
						placeholder="Email"
						icon={<FontAwesomeIcon icon={faInbox} />}
					/>

					<TextInputForm
						name="pwd"
						type="input"
						placeholder="Mật khẩu"
						icon={<FontAwesomeIcon icon={faLock} />}
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
