import checkToken from "~/src/functions/checkToken"
import jwt from "jwt-simple"
export default eventHandler(async (event) => {
	const { token, username, password, newPassword, type } = await readBody(event)
	const storage = useStorage("cransurvey")
	if (!token || !username || !type) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if (await checkToken(token)) {
		if (type == "pwd") {
			if (!password || !newPassword) {
				return {
					code: 1001,
					msg: "Invalid parameters.",
				}
			}
			const user = await storage.getItem("usr")
			if (!user[username]) {
				return {
					code: 2002,
					msg: "Database Error.",
				}
			}
			const tk = jwt.decode(token, process.env.JWT_SECRET || "_cransurvey_")
			if (!user[tk.id].admin && tk.id != username) {
				return {
					code: 4001,
					msg: "Permission denied.",
				}
			}
			if (user[username].pwd != password) {
				return {
					code: 2004,
					msg: "Wrong password.",
				}
			}
			user[username].pwd = newPassword
			await storage.setItem("usr", user)
			return {
				code: 0,
				msg: "Success.",
			}
		}
	} else {
		return {
			code: 2001,
			msg: "Invalid token.",
		}
	}
})
