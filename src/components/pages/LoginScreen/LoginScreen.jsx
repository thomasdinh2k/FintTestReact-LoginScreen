import React from "react"
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"

export default function LoginScreen() {
	return (
		<div className="login-root">
			<img src="https://www.fint.vn/wp-content/uploads/2023/11/1626080287-12892745-fint-vn.png" alt="" />
            <div className="wrapper">
				<div className='header'>
					<h2>Mời đăng nhập</h2>
					
				</div>
				<form className="login-form" action="#">
					
					<div className="form-group">
						<input
							type="user-name"
							placeholder="Tài khoản"
							className="form-control"
						/>

						<div className="pre-placeholder-icon">
							<FontAwesomeIcon icon={faUser} />
						</div>

					</div>


					<div className="form-group">
						<input
							type="user-name"
							placeholder="Mật khẩu"
							className="form-control"
						/>
						<div className="pre-placeholder-icon">
							<FontAwesomeIcon icon={faLock} />
						</div>
					</div>
					<div id="form-3" className="form-group">
						<div className="save-pwd">
							<label>
								<input type="checkbox" name="save-pwd" id="" />
								Lưu mật khẩu
								<span className="checkmark"></span>
							</label>
						</div>
						<div className="login-button">
							<button type="submit">Đăng nhập</button>
						</div>
					</div>
					<div id="form-4" className="form-group">
						<div className="sign-up">
							Chưa có tài khoản?<a href="#">Đăng ký</a>
						</div>
						<div className="forgot">
							<a href="#">Quên mật khẩu</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
