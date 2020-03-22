module.exports = {
  testEnvironment: 'node',
  coverageReporters: ['json', 'html'],
  clearMocks: true,
  testURL: 'http://http://127.0.0.1:3003/',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\']
};
