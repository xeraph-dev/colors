// @ts-check

/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
module.exports = {
  commandRunner: {
    command: 'bun test',
  },
  cleanTempDir: 'always',
  reporters: ['clear-text'],
  thresholds: {
    high: 100,
    low: 100,
  },
}
