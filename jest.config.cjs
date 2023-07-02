module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '\\.(png|jpg|jpeg|gif|svg)$': 'jest-transform-stub',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/contexts/', '<rootDir>/src/api/'],
  modulePathIgnorePatterns: ['<rootDir>/src/contexts/', '<rootDir>/src/api/'],
};
