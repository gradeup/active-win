'use strict';

module.exports = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos')();
	}

	return Promise.reject(new Error('macOS only'));
};

module.exports.sync = () => {
	if (process.platform === 'darwin') {
		return require('./lib/macos').sync();
	}

	throw new Error('macOS only');
};
