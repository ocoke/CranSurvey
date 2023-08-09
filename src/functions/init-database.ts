// init Unstorage Database

// import { createStorage } from "unstorage";
// import dbConfig from "./db-config";

export default async function initDatabase() {
	try {
		const storage = useStorage("cransurvey")

		// user(s)

		await storage.setItem("usr", [])

		// survey id(s)
		await storage.setItem("sid", [])

		// answers
		await storage.setItem("ans", {})

		// configs

		await storage.setItem("cfg", {
			users: {
				allowSignUp: true,
			},
		})

		await storage.setItem("init", true)

		return true
	} catch (e) {
		return false
	}
}
