import { defineConfig } from 'checkly'
import { RetryStrategyBuilder } from 'checkly/constructs'

const config = defineConfig({
  projectName: 'sample-web-app-gh-actions',
  logicalId: 'sample-web-app-gh-actions',
  repoUrl: 'https://github.com/guolau/sample-web-app-gh-actions',
  checks: {
    frequency: 60*24,
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['mac'],
    runtimeId: '2025.04',
    checkMatch: '**/__checks__/*.check.ts',
    retryStrategy: RetryStrategyBuilder.noRetries(),
    browserChecks: {
      testMatch: '**/tests/*.spec.ts',
      tags: ['browser'],
    },
  },
  cli: {
    runLocation: 'us-east-1',
    retries: 0,
  },
})

export default config
