import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import captchaBg from "../../../assets/captcha-bg.png"
import { memo } from "react"

const CaptchaBox = memo(function CaptchaBox({
	captchaContent,
	handleReloadContent,
	correct,
	...rest
}) {
	return (
		<div className="captcha-box">
			<header>Hãy nhập mã CAPTCHA sau:</header>
			<div className="captcha-area">
				<div className="captcha-img">
					<img src={captchaBg} alt="captcha-box" />
					<div className="captcha-text">
						{captchaContent.map((text, index) => {
							const randomAngle = Math.floor(Math.random() * 91 - 45) // To make it rotate backward as well
							return (
								<span
									key={index}
									style={{
										transform: `rotate(${randomAngle}deg)`,
										transformOrigin: "center",
									}}
								>
									{text}
								</span>
							)
						})}
					</div>
				</div>
				<button className="reload-btn" onClick={handleReloadContent}>
					<i>
						<FontAwesomeIcon icon={faRotateRight} />
					</i>
				</button>
			</div>

			<div className={`input-area`}>
				<input
					type="text"
					name="captcha"
					id="captcha"
					placeholder="Nhập Captcha..."
					className={correct ? "correct" : undefined}
					{...rest}
					required
				/>
				{/* <button>Check</button> */}
			</div>
			<div className="status-txt">Captcha chưa đúng, vui lòng nhập lại</div>
		</div>
	)
})

// function CaptchaBox({
// 	captchaContent,
// 	handleReloadContent,
// 	correct,
// 	...rest
// }) {

// }


export default CaptchaBox
