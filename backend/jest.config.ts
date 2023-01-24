export default {
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.m?[tj]s?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testMatch: ['<rootDir>/src/**/*.spec.(ts)'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'build'],
  coverageReporters: ['json', 'html', 'lcov'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'index.ts',
    'routes.ts',
    'test-config',
    'config',
    'interfaces',
    '.utils.ts',
    '.spec.ts',
    '.mock.ts',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
