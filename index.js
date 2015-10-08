var hash = require('hash-index')

module.exports = function (hostname) {
  return hash(hostname, 65535 - 1024) + 1024
}
