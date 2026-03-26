'use strict';

// ESLint 9 expects `structuredClone` to exist (Node >= 17). This repo currently
// runs on Node 16, so we polyfill `globalThis.structuredClone` before loading ESLint.
const poly = require('@ungap/structured-clone');
const structuredClone = poly?.default ?? poly;
globalThis.structuredClone = structuredClone;

require('./node_modules/eslint/bin/eslint.js');

