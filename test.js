var tape = require('tape')
var toPort = require('./')

tape('is consistent', function (t) {
  t.same(toPort('test.com'), toPort('test.com'))
  t.same(toPort('example.com'), toPort('example.com'))
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