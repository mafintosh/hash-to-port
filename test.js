var tape = require('tape')
var toPort = require('./')

tape('is consistent', function (t) {
  t.same(toPort('test.com'), toPort('test.com'))
  t.same(toPort('example.com'), toPort('example.com'))
  t.same(toPort('example.com', 2000), toPort('example.com', 2000))
  t.same(toPort('example.com', 2000, 3000), toPort('example.com', 2000, 3000))
  t.end()
})

tape('is >=1024 <=65535', function (t) {
  for (var i = 0; i < 5000; i++) {
    var port = toPort('example-' + i + '.com')
    t.ok(port <= 65535)
    t.ok(port >= 1024)
  }
  t.end()
})

tape('rejects invalid port choices', function(t) {
    t.throws(function () { toPort('foo', 'not a number') }, /must be valid numbers/)
    t.throws(function () { toPort('foo', 2000, 'not a number') }, /must be valid numbers/)
    t.throws(function () { toPort('foo', 9001, 9000) }, /must be greater or equal to/)
    t.throws(function () { toPort('foo', 1023, 9000) }, /must be between 1024 and 65535/)
    t.throws(function () { toPort('foo', 1024, 65536) }, /must be between 1024 and 65535/)
    t.end()
})
