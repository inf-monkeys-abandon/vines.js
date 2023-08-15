module.exports = {
  type: "module",
  moduleFileExtensions: ["js", "json", "ts"],
  presets: ["ts-jest"],
  rootDir: "./",
  testEnvironment: "node",
  testTimeout: 1e9,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFiles: ["dotenv/config"],
  globalSetup: "./test/init.ts",
  moduleDirectories: [".", "src", "../src", "../node_modules"],
  // coverageReporters: ['json'],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    // "src/modules/api/v3/**/*.ts",
    // // ignore Pattern
    // "!src/common/errors/**/*",
  ],
  coveragePathIgnorePatterns: [".module.ts$", ".spec.ts$", "__tests__/"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
