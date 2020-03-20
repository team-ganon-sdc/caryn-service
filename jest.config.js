module.exports = {
  testEnvironment: 'node',
  coverageReporters: ['json', 'html']
  clearMocks: true,
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\']
};


"jest": {     "collectCoverage": true,     "coverageReporters": ["json", "html"],     "testEnvironment": "node",     "coveragePathIgnorePatterns": [       "/node_modules/",       "<rootDir>/client/dist/"     ]   }