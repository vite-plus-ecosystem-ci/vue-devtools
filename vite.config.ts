import { defineConfig } from 'vite-plus'

const ignorePatterns = [
  'dist/**',
  'packages/*/dist/**',
  'coverage/**',
  'node_modules/**',
  '.vite/**',
  '.turbo/**',
]

export default defineConfig({
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://release-v1-3-0-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
  },
  lint: {
    ignorePatterns,
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns,
    printWidth: 100,
    semi: false,
    singleQuote: true,
    sortPackageJson: true,
    trailingComma: 'all',
  },
})
