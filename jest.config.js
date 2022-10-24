module.exports = {
  transform: {
    '\\.[jt]sx?$': '<rootDir>/jest/jest-preprocess.js',
  },
  testPathIgnorePatterns: ['node_modules', 'public'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  testEnvironment: 'jsdom',
  modulePaths: ['node_modules', '<rootDir>/src']
}