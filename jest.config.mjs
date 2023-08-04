export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
