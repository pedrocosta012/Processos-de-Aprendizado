/** @type {import('jest').Config} */
module.exports = {
    roots: ['<rootDir>/tests', '<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: '<rootDir>/coverage',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts$': 'ts-jest'
    }
};
