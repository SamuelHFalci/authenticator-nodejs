/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {clearMocks: true,
  roots: ['<rootDir>/src'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
