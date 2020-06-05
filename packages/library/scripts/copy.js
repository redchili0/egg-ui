#!/usr/bin/env node
'use strict'
 
var copyfiles = require('copyfiles');
 
copyfiles(['src/**/*.tsx', 'dist'], {"up": 1}, () => {});
copyfiles(['src/**/*.ts', 'dist'], {"up": 1}, () => {});