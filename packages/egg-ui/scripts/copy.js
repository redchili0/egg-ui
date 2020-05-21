#!/usr/bin/env node
'use strict'
 
const copyfiles = require('copyfiles');
 
copyfiles(['src/components/**/*.css', 'dist'], {"up": 1}, () => {});