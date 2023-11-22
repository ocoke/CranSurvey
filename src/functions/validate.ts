import { isValidPhoneNumber } from "libphonenumber-js"
export default function ansValidate(answer: any, type: string, rule: any) {
	if (type == "short_answer" || type == "paragraph") {
		// Short Answer
		if (rule.includes(":")) {
			// [num]:[num]
			if (answer.length >= parseInt(rule.split(":")[0]) && answer.length <= parseInt(rule.split(":")[1])) {
				if (rule.split(":").length >= 3) {
					// email/phone/number/URL
					const check: string = rule.split(":")[2]
					if (check == "email") {
						const regex =
							/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g
						if (regex.test(answer)) {
							return true
						} else {
							return false
						}
					} else if (check == "phone") {
						if (rule.split(":")[3]) {
							const regions = rule.split(":")[3].split(",")
							for (const i in regions) {
								if (isValidPhoneNumber(answer, regions[i])) {
									return true
								}
							}
						} else {
							return false
						}
					} else if (check == "number") {
						if (isNaN(answer)) {
							return false
						} else {
							return true
						}
					} else if (check == "URL") {
						const regex =
							/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g
						if (regex.test(answer)) {
							return true
						} else {
							return false
						}
					}
				} else {
					return true
				}
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
	} else if (type == "date") {
		if (typeof answer != "number") {
			return false
		}
		if (answer >= rule[0] && answer <= rule[1]) {
			return true
		} else {
			return false
		}
	} else if (type == "file") {
		// using transfer.sh
		const url = new URL(answer)
		if (url.hostname == "transfer.sh" && answer.length <= 2048) {
			// suffix for all images files
			const suffixes = {
				images: ["png", "jpg", "jpeg", "gif", "webp", "svg", "ico", "bmp", "tiff", "tif"],
				docs: ["docs", "doc", "docx", "odt", "rtf", "tex", "txt", "wpd"],
				pdf: ["pdf"],
				sheets: ["sheets", "xls", "xlsx", "ods", "csv"],
				slides: ["slides", "ppt", "pptx", "odp"],
				audios: ["mp3", "wav", "wma", "m4a", "aac", "oga", "flac", "webma"],
				videos: ["mp4", "webm", "mov", "mkv", "flv", "ogv", "avi", "wmv", "m4v"],
				archives: ["zip", "tar.gz", "tar.xz", "tar.lz", "tar.bz2", "tar"],
			}
			// rule: ['images', 'docs']
			if (rule.length == 0) {
				return true
			}
			for (const i in rule) {
				if (suffixes[rule[i]].includes(url.pathname.split(".").pop())) {
					return true
				}
			}
		} else {
			return false
		}
	} else {
		return false
	}
}
