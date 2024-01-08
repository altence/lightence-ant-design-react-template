module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',  // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: { metaObjectReplacement: { url: 'https://www.url.com' } }
            }
          ]
        }
      }
    ]
  },
  globals: {
    window: {},
    document: {},
  },
  preset: 'ts-jest/presets/default-esm',
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react|@testing-library/react)",
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': 'jest-transform-file',
    "^@app/(.*)$": "<rootDir>/src/$1",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
};
