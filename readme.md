# all-windows

Get metadata about all windows (title, id, bounds, owner, URL, etc)

Works on macOS.

Users on macOS 10.13 or earlier needs to download the [Swift runtime support libraries](https://support.apple.com/kb/DL1998).

## Install

```
$ npm install all-windows
```

## Usage

```js
const allWindows = require('all-windows');

(async () => {
	console.log(await allWindows());
	/*
	{
		title: 'Unicorns - Google Search',
		id: 5762,
		bounds: {
			x: 0,
			y: 0,
			height: 900,
			width: 1440
		},
		owner: {
			name: 'Google Chrome',
			processId: 310,
			bundleId: 'com.google.Chrome',
			path: '/Applications/Google Chrome.app'
		},
		url: 'https://www.google.com/search?q=unicorn',
		memoryUsage: 11015432
	}
	*/
})();
```


## API

### allWindows()

Returns a `Promise<Object>` with the result, or `Promise<undefined>` if there are no windows or if the information is not available.

### allWindows.sync()

Returns an `Object` with the result, or `undefined` if there are no windows.

## Result

- `platform` *(string)* - `'macos'`
- `title` *(string)* - Window title
- `id` *(number)* - Window identifier
- `bounds` *(Object)* - Window position and size
	- `x` *(number)*
	- `y` *(number)*
	- `width` *(number)*
	- `height` *(number)*
- `owner` *(Object)* - App that owns the window
	- `name` *(string)* - Name of the app
	- `processId` *(number)* - Process identifier
	- `bundleId` *(string)* - Bundle identifier *(macOS only)*
	- `path` *(string)* - Path to the app
- `url` *(string?)* - URL of the active browser tab if the window is Safari, Chrome, Edge, or Brave *(macOS only)*
- `memoryUsage` *(number)* - Memory usage by the window owner process

## OS support

It works on macOS.

___

### Thanks [sindresorhus](https://github.com/sindresorhus/active-win) for the base implementation