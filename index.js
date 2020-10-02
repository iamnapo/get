const get = (object, path, defaultValue) => {
	if (typeof path !== "string") throw new TypeError("Expected a string");

	const result = path.split(/[.[\]]+?/).filter(Boolean).reduce((res, key) => (res != null ? res[key] : res), object);

	return (result == null || result === object) ? defaultValue : result;
};

module.exports = get;
