import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom"
import HomePage from "./pages/Home"
import LoginScreen from "./pages/Login"
import SettingScreen from "./pages/Setting"
import SignUpScreen from "./pages/SignUp"

const routers = createBrowserRouter([
	{
		path: "/",
		element: <LoginScreen />,
	},
	{
		path: "/sign-up",
		element: <SignUpScreen />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
	{
		path: "/settings",
		element: <SettingScreen />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routers}></RouterProvider>
	</React.StrictMode>
)
