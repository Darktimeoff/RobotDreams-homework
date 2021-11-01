module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
            diagnostics: {
            pathRegex: /\.(spec|test)\.ts$/
            }
        }
    },
    moduleFileExtensions: [
        'ts',
        'js',
        'json'
    ],
	moduleDirectories: [
		"node_modules",
		"src"
	],
	modulePaths: [
		"src"
	],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
        '**/test/**/*.test.(ts)'
    ],
    testEnvironment: 'node'
};