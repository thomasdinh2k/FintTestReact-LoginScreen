import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.scss"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function ValidationBox({ validation_type, validation_status }) {
	// console.log(validation_status)

	return (
		<div className="validation_box">
			<h3>Đảm bảo giá trị {validation_type} thỏa mãn các điều kiện:</h3>
			<p id="letter" className={validation_status.letter ? "valid" : "invalid"}>
				<FontAwesomeIcon icon={validation_status.letter ? faCheck : faXmark} />
				Có 1 chữ <b>in thường</b>
			</p>
			<p
				id="capital"
				className={validation_status.capital ? "valid" : "invalid"}
			>
				<FontAwesomeIcon icon={validation_status.capital ? faCheck : faXmark} />
				Có 1 chữ <b>in hoa (uppercase)</b>
			</p>
			<p id="number" className={validation_status.number ? "valid" : "invalid"}>
				<FontAwesomeIcon icon={validation_status.number ? faCheck : faXmark} />
				Có 1 <b>số</b>
			</p>
			<p id="special" className={validation_status.special ? "valid" : "invalid"}>
				<FontAwesomeIcon icon={validation_status.special ? faCheck : faXmark} />
				Có 1 <b>ký tự đặc biệt</b>
			</p>
			<p id="length" className={validation_status.length ? "valid" : "invalid"}>
				<FontAwesomeIcon icon={validation_status.length ? faCheck : faXmark} />
				Tối thiểu <b>8 ký tự</b>
			</p>
		</div>
	)
}
