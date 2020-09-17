const assertString = (string) => {
	if (typeof string !== "string") {
		throw new TypeError("Expected a string");
	}
};

const get = (object, path, defaultValue) => {
	assertString(path);

	const result = path.split(/[.[\]]+?/).filter(Boolean).reduce((res, key) => (res != null ? res[key] : res), object);

	return (result == null || result === object) ? defaultValue : result;
};

module.exports = get;
