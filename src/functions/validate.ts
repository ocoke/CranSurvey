export default function ansValidate(answer: any, type: string, rule: string) {
	if (type == "short_answer") {
		// Short Answer
		if (rule.includes(":")) {
			// [num]:[num]
			if (answer.length >= parseInt(rule.split(":")[0]) && answer.length <= parseInt(rule.split(":")[1])) {
				return true
			} else {
				return false
			}
		}
	} else if (type == "paragraph") {
		if (rule.includes(":")) {
			// [num]:[num]
			if (answer.length >= parseInt(rule.split(":")[0]) && answer.length <= parseInt(rule.split(":")[1])) {
				return true
			} else {
				return false
			}
		}
	} else if (type == "info") {
		if (rule == "disabled" && answer) {
			return false
		} else if (!rule) {
			return false
		}
	} else if (type == "multiple" || type == "dropdown") {
		if (typeof answer != "number") {
			return false
		}
		if (answer >= rule) {
			return false
		}
		return true
	} else if (type == "checkboxes") {
		if (answer.length > rule) {
			return false
		}
		for (const i in answer) {
			if (answer[i] !== false && answer[i] !== true) {
				return false
			}
		}
		return true
	} else {
		return false
	}
}
