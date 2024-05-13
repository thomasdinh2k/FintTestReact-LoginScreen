import "./App.css"
import "./components/common/styles.scss"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import LoginScreen from "./components/pages/LoginScreen"
import SettingScreen from "./components/pages/SettingScreen"
import SignUpScreen from "./components/pages/SignUpScreen"
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginScreen />} />
				<Route path="sign-up" element={<SignUpScreen />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/settings" element={<SettingScreen />} />
			</Routes>
		</>
	)
}

export default App
