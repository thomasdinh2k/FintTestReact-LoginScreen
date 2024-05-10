import "./App.css"
import "./components/common/styles.scss"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage/Index"
import LoginScreen from "./components/pages/LoginScreen/LoginScreen"
import SettingScreen from "./components/pages/SettingScreen/SettingScreen"
import SignUpScreen from "./components/pages/SignUpScreen/SignUpScreen"
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
