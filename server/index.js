// Note this file is the server entry point during dev only.
// In production, the register is not used, and the template's compiled version must be provided
require('babel-core/register');
require('./server');
