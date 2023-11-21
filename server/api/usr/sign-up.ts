import jwt from "jwt-simple"
import initDatabase from "~/src/functions/init-database"
import escapeText from "~/src/functions/escape"
export default eventHandler(async (event) => {
	const storage = useStorage("cransurvey")
	const reqBody = await readBody(event)

	const id = escapeText(reqBody.id)
	const { pwd, icode } = reqBody

	if (!id || !pwd || id.length >= 32 || pwd.length >= 64) {
		return {
			code: 1001,
			msg: "Invalid parameters.",
		}
	}
	if ((await storage.getItem("init")) != true) {
		await initDatabase()

		const usr: object[] = await storage.getItem("usr")
		usr[id] = {
			pwd,
			admin: true,
		}

		await storage.setItem("usr", usr)

		return {
			code: 0,
			msg: "Success.",
			init: true,
			token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || "_cransurvey_"),
		}
	} else {
		const usr: object[] = await storage.getItem("usr")
		const exist = usr[id]

		if (exist) {
			return {
				code: 1002,
				msg: "User already exists.",
			}
		}

		const cfg: object = await storage.getItem("cfg")
		const allowSignUp: boolean = cfg["users"].allowSignUp
		const inviteCode: string = cfg["users"].inviteCode

		if (!allowSignUp) {
			return {
				code: 1003,
				msg: "Sign up is not allowed.",
			}
		}

		if (inviteCode && icode != inviteCode) {
			return {
				code: 1004,
				msg: "Invalid invite code.",
			}
		}

		usr[id] = {
			pwd,
			admin: false,
		}

		await storage.setItem("usr", usr)

		return {
			code: 0,
			msg: "Success.",
			init: false,
			token: jwt.encode({ id, pwd }, process.env.JWT_SECRET || "_cransurvey_"),
		}
	}
})
