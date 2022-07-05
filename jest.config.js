/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@root/(.*)": "<rootDir>/src/$1"
  },
  testPathIgnorePatterns: ["<rootDir>/examples/"],
  watchPathIgnorePatterns: ["<rootDir>/examples/"]
};
