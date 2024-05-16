import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import captchaBg from "../../../assets/captcha-bg.png"

export default function CaptchaBox() {
	const captchaContent = ["A", "E", "Y", "O", "U"]

	return (
		<div className="captcha-box">
			<header>Hãy nhập mã CAPTCHA sau:</header>
			<div className="captcha-area">
				<div className="captcha-img">
					<img src={captchaBg} alt="captcha-box" />
					{/* <div className="captcha-text">A E Y O U</div> */}
					<div className="captcha-text">
						{captchaContent.map((text, index) => {
							const randomAngle = Math.floor(Math.random() * 361)
							return (
								<span
									key={index}
									style={{ transform: `rotate(${randomAngle}deg)` }}
								>
									{text}
								</span>
							)
						})}
					</div>
				</div>
				<button className="reload-btn">
					<i>
						<FontAwesomeIcon icon={faRotateRight} />
					</i>
				</button>
			</div>

			<form action="#" className="input-area">
				<input
					type="text"
					name="captcha"
					id="captcha"
					placeholder="Nhập Captcha..."
					required
				/>
				{/* <button>Check</button> */}
			</form>
			<div className="status-txt">Captcha chưa đúng, vui lòng nhập lại</div>
		</div>
	)
}
