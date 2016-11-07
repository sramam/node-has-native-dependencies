# node-has-native-dependencies
A simple command line utility to check where a node-module has native dependencies

This does a rather brute-force dependency check that there are no installed node_modules
that have a 'bindings.gyp' file within. 'bindings.gyp' is a telltale sign of a module
with native dependencies.

# Installation

    npm install node-has-native-dependencies

# Usage
## As a library

    const hasNativeDeps = require('node-has-native-dependencies')
    hasNativeDeps();

If you want to control which directory to scan

    hasNativeDeps(some_dir_path)

## From the command line

   ./node_modules/.bin/node-has-native-dependencies

# License
Apache 2.0

