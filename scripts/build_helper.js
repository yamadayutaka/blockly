/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Gulp script to build Blockly for Node & NPM.
 * Run this script by calling "npm install" in this directory.
 */
/* eslint-env node */

const path = require('path');

/**
 * Escape regular expression pattern by making the following replacements:
 *  * single backslash -> double backslash
 * @param {string} pattern regular expression pattern
 * @return {string} escaped regular expression pattern
 */
function escapePattern(pattern) {
  return pattern.replace(/\\/g, '\\\\');
}

/**
 * Replaces OS-specific path with POSIX style path.
 * @param {string} target target path
 * @param {boolean} keepRoot keep original root path
 * @return {string} normalized path
 */
function normalizePath(target, keepRoot = false) {
  const osSpecificSep = new RegExp(escapePattern(path.sep), 'g');
  if (!keepRoot) {
    const root = new RegExp(escapePattern(`^${path.resolve('/')}`));
    target = target.replace(root, path.posix.sep);
  }
  return target.replace(osSpecificSep, path.posix.sep);
}

module.exports = {
  normalizePath,
};
