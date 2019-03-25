module.exports = {
  collectCoverageFrom: [
    "src/modules/**/*.js",
    ],
  coveragePathIgnorePatterns: ["src/modules/index.js"],
  moduleFileExtensions: ["ts", "js"],
  testEnvironment: "node",
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  testPathIgnorePatterns: ["./build/", "./node_modules/"],
  verbose: true,
	testMatch: [
    "**/*.spec.js",
	],
};
