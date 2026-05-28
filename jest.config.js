/** @format */
const path = require('path')

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)', '**/__tests__/*.(js|jsx|ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/assets/**'],
  coverageReporters: ['html', 'text-summary'],
  coverageDirectory: path.resolve(__dirname, './tests/coverage')
}
