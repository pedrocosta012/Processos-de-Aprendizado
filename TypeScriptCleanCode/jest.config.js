/** @type {import('jest').Config} */
const config = {
    roots: ['<rootDir>/__tests__', '<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testEnvironment: 'jest-environment-node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
};

module.exports = config;
