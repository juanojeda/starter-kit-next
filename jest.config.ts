import jest from "next/jest.js";

const createJestConfig = jest({ dir: "./" });
module.exports = createJestConfig();

export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/js-with-ts",
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.mjs$": "ts-jest"
  },
  testPathIgnorePatterns: ["./node_modules/"]
};