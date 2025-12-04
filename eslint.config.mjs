import {defineConfig} from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'

import tsParser from '@typescript-eslint/parser'

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import unicornPlugin from 'eslint-plugin-unicorn'
import promisePlugin from 'eslint-plugin-promise'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  {
    ignores: ['src/**/*.js'],
  },

  js.configs.recommended,
  ...nextCoreWebVitals,

  {
    files: ['*/.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      unicorn: unicornPlugin,
      promise: promisePlugin,
    },

    rules: {
      // React
      'react/prop-types': 'off',

      // Unicorn
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/filename-case': 'off',

      // Promise
      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-native': 'off',
      'promise/no-nesting': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'warn',
      'promise/valid-params': 'warn',
      'promise/avoid-new': 'off',
    },
  },

  prettierConfig,

  {
    files: ['*/.bonus*.{js,jsx,ts,tsx}'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },
])
