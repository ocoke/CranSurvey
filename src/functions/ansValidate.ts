// Validate the format of the answer

export default function ansValidate(answer: string, type: string) {
	// Plain Text
	if (type.startsWith("string_plain")) {
		if (type == "string_plain") {
			if (answer.length > 0 && answer.length < 512) {
				return true
			} else {
				return false
			}
		}
		const typeArr = type.split("string_plain_")[1].split("_")
		if (typeArr[0] == "max") {
			if (answer.length > 0 && answer.length < parseInt(typeArr[1])) {
				return true
			} else {
				return false
			}
		}
		if (typeArr[0] == "min") {
			if (answer.length > parseInt(typeArr[1]) && answer.length < 512) {
				return true
			} else {
				return false
			}
		}
		if (Number(typeArr[0].split(":")[0]) && typeArr[0].split(":")[1]) {
			if (answer.length > parseInt(typeArr[0].split(":")[0]) && answer.length < parseInt(typeArr[0].split(":")[1])) {
				return true
			} else {
				return false
			}
		}
	}

	// Number
	if (type.startsWith("num_")) {
		const typeArr = type.split("num_")[1].split("_")
		if (typeArr[0] == "int") {
			if (Number(answer) && Number(answer) % 1 == 0) {
				return true
			} else {
				return false
			}
		}
		if (typeArr[0] == "float") {
			if (Number(answer)) {
				return true
			} else {
				return false
			}
		}
		if (typeArr[0] == "max") {
			if (Number(answer) && Number(answer) < parseInt(typeArr[1])) {
				return true
			} else {
				return false
			}
		}
		if (typeArr[0] == "min") {
			if (Number(answer) && Number(answer) > parseInt(typeArr[1])) {
				return true
			} else {
				return false
			}
		}
		if (Number(typeArr[0].split(":")[0]) && typeArr[0].split(":")[1]) {
			if (
				Number(answer) &&
				Number(answer) > parseInt(typeArr[0].split(":")[0]) &&
				Number(answer) < parseInt(typeArr[0].split(":")[1])
			) {
				return true
			} else {
				return false
			}
		}
	}

	// Rating
	if (type.startsWith("rating_")) {
		const typeArr = type.split("rating_")[1]
		if (typeArr == "5") {
			if (Number(answer) && Number(answer) >= 1 && Number(answer) <= 5) {
				return true
			} else {
				return false
			}
		}
		if (typeArr == "10") {
			if (Number(answer) && Number(answer) >= 1 && Number(answer) <= 10) {
				return true
			} else {
				return false
			}
		}
		const typeArr2 = typeArr.split(":")
		if (Number(typeArr2[0]) && Number(typeArr2[1])) {
			if (Number(answer) && Number(answer) >= parseInt(typeArr2[0]) && Number(answer) <= parseInt(typeArr2[1])) {
				return true
			} else {
				return false
			}
		}
	}

	// Email
	if (type == "string_email") {
		const emailRegex = new RegExp(
			'(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))',
		)
		if (answer.length > 0 && answer.length < 512 && answer.match(emailRegex)) {
			return true
		} else {
			return false
		}
	}

	// Phone Number (Todo)

	// Date (Todo)

	// Time (Todo)
}
