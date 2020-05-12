module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^examples/(.*)$": "<rootDir>/docs/src/routes/$1",
    "^svant(.*)$": "<rootDir>/src/components$1",
    "^svelte(.*)$": "<rootDir>/node_modules/svelte$1"
  },
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,svelte}",
    "!**/node_modules/**",
    "!src/components/icons/*.svelte",
    "!src/provider/locale/*.js",
    "!src/tests/*.js",
    "!**/__tests__/**"
  ]
};
