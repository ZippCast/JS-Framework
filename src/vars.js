var author = "Louis Gualtieri",
	version = "0.0.1",
	now = new Date(),
	year = now.getFullYear(),
	class_to_type = {},
	toString = class_to_type.toString,
	expr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;