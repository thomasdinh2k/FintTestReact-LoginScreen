import { fa42Group } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function NavItemTitle({title}) {
	return (
		<a href="#">
			<FontAwesomeIcon icon={fa42Group}/>
            
			<span className="nav__list-text">{title}</span>
			<i className="arrow down" />
		</a>
	)
}
