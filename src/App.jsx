import "./styles/styles.scss"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import LoginScreen from "./pages/Login"
import SettingScreen from "./pages/Setting"
import SignUpScreen from "./pages/SignUp"
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
