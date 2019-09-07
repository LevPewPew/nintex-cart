// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
   moduleFileExtensions: ['js', 'jsx', 'json'],
   rootDir: 'src/',
   testRegex: '^.*.test.(js|jsx)$',
   moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/empty.js',
      '\\.(css|less)$': '<rootDir>/empty.js',
      '\\.md$': '<rootDir>/empty-md.js',
   },
   testURL: 'https://localhost/',
};
