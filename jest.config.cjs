module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$": "jest-file-loader"
  },
  globals: {
    window: {},
    document: {},
  },
  preset: "ts-jest",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react|@testing-library/react)",
  ],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  moduleDirectories: ['node_modules'],
  setupFiles: ["<rootDir>/setupTests.ts"],
  testEnvironment: 'jsdom',
};
