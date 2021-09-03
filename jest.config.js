module.exports = {
  testEnvironment: "jsdom",
  verbose: true,
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: ["coverage", "/*.d.ts", "/node_modules/", "/.next/", "/*.test.tsx?"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/.storybook/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.(css|sass|scss)$"],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
}
