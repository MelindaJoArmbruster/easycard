const path = require('path')

// Shell/injected settings take precedence. Tests and production never read files.
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const result = require('dotenv').config({
    path: path.resolve(__dirname, '..', 'dev.env')
  })
  if (result.error && result.error.code !== 'ENOENT') throw result.error
}
