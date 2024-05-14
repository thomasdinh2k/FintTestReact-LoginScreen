export const minCharRequired = 5
export const maxCharUsername = 15
export const maxCharPassword = 20
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
export const passwordRegex =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
export const phoneNumberRegex = /^\+?([0-9]{1,4})\)?[-. ]?([0-9]{10})$/
export const usernameRegex = /^[a-zA-Z0-9]+$/
export const minAge = 18
export const maxAge = 65
export const noWhiteSpace = /^\s*$/
export const dateFormat = /^\d{4}-\d{2}-\d{2}$/
