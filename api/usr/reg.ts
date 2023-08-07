import jwt from "jwt-simple"
import initDatabase from "~/src/functions/init-database"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const { id, pwd } = await readBody(event)
	if (!id || !pwd || id.length >= 32 || pwd.length >= 64) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if ((await storage.getItem("init")) != true) {
		await initDatabase()

		const usr: object[] = await storage.getItem("usr")
		usr.push({
			id,
			pwd,
		})

		await storage.setItem("usr", usr)

		return {
			code: 0,
			msg: "Success.",
			init: true,
			token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || "_cransurvey_"),
		}
	} else {
		const usr: object[] = await storage.getItem("usr")
		const exist = (usr as any[]).find((v) => v.id == id)

		if (exist) {
			return {
				code: 1002,
				msg: "User already exists.",
			}
		}

		usr.push({
			id,
			pwd,
		})

		await storage.setItem("usr", usr)

		return {
			code: 0,
			msg: "Success.",
			init: false,
			token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || "_cransurvey_"),
		}
	}
})
