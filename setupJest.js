//setupJest.js
import 'isomorphic-fetch';
global.fetch = require('jest-fetch-mock');
