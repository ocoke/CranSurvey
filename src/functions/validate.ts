export default function ansValidate(answer: string, type: string, rule: string) {
	if (type == "short_answer") {
		// Short Answer
		if (rule == "default") {
			// default: 0-2048
			if (answer.length > 0 && answer.length <= 2048) {
				return true
			} else {
				return false
			}
		} else if (rule.startsWith("max_")) {
			// max_[num]
			if (answer.length > 0 && answer.length <= parseInt(rule.split("max_")[1])) {
				return true
			} else {
				return false
			}
		} else if (rule.startsWith("min_")) {
			// min_[num]
			if (answer.length >= parseInt(rule.split("min_")[1])) {
				return true
			} else {
				return false
			}
		} else if (rule.includes(":")) {
			// [num]:[num]
			if (answer.length >= parseInt(rule.split(":")[0]) && answer.length <= parseInt(rule.split(":")[1])) {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
}
