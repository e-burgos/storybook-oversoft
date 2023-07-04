module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '.+\\.(css|styl|less|sass|scss)$'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
