import React from "react"
import NavBar from "./NavBar/navBar"
import "./styles.scss"

export default function HomePage() {
	return (
		<>
			<div className="homepage-root">
				<NavBar />
				<h1>
					Hello Site
				</h1>
			</div>
		</>
	)
}
