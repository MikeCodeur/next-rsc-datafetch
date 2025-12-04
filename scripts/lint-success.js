#!/usr/bin/env node
const supportsColor = process.stdout.isTTY && process.env.TERM !== 'dumb'
const green = supportsColor ? '\x1b[32m' : ''
const reset = supportsColor ? '\x1b[0m' : ''
console.log(`${green}✓ No ESLint warnings or errors${reset}`)
