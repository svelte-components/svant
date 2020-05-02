module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^examples/(.*)$": "<rootDir>/docs/src/routes/$1",
    "^svant(.*)$": "<rootDir>/src/components$1"
  },
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,svelte}",
    "!**/node_modules/**",
    "!src/components/icons/*.svelte",
    "!src/provider/locale/*.js"
  ]
};
