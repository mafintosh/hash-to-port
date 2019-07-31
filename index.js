var hash = require('hash-index')

module.exports = function (hostname, from, to) {
  from = from || 1024
  to = to || 65535

  if (typeof from !== 'number' || typeof to !== 'number') {
    throw new TypeError('"to" and "from" arguments must be valid numbers!')
  }

  if (from >= to) {
    throw new RangeError('"to" must be greater or equal to than "from"')
  }

  if (from < 1024 || to > 65535) {
    throw new RangeError('port numbers must be between 1024 and 65535')
  }

  return hash(hostname, to - from) + from
}
