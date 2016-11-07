var walk = require('fs-walk')
var path = require('path')

var default_base = path.join(process.cwd(), 'node_modules');

var hasNativeCheck = function (basedir, verbose) {
	var hasNativeModules = []
	walk.walkSync(
		basedir || default_base,
	 	function(dir, fname, stat) {
			if (fname === 'binding.gyp') {
				hasNativeModules.push(path.join(dir, fname))
			}
		})
	return hasNativeModules;
}

exports.check = hasNativeCheck

if (require.main === module) {
	var res = hasNativeCheck(default_base)
	if (0 < res.length) {
		console.log('Found native dependencies in modules:')
		res.map((mod) => {
			console.log('    ' + mod)
		})
		process.exit(-1);
	}
}
