export default function ansValidate(answer: string, type: string, rule: string) {
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
    } else {
        return false
    }
}
