import assert from 'node:assert/strict';
import config from '../drizzle.config.ts';

assert.ok(config, 'Config should be defined');
assert.equal(typeof config, 'object', 'Config should be an object');
assert.ok(config.dbCredentials?.url, 'dbCredentials.url should be defined');
