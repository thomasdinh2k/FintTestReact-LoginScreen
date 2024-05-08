import "./App.css"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import LoginScreen from "./components/LoginScreen/LoginScreen"
import SettingScreen from "./components/SettingScreen/SettingScreen"
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginScreen />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/settings" element={<SettingScreen />} />
			</Routes>
		</>
	)
}

export default App
