module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\']
};