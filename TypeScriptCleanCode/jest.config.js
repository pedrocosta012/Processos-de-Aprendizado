/** @type {import('jest').Config} */
const config = {
    roots: ['<rootDir>/tests'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+.ts$': 'ts-jest',
    },
};

module.exports = config;
