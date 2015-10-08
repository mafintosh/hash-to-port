# hash-to-port

Hash a value to a valid port

```
npm install hash-to-port
```

[![build status](http://img.shields.io/travis/mafintosh/hash-to-port.svg?style=flat)](http://travis-ci.org/mafintosh/hash-to-port)

## Usage

``` js
var toPort = require('hash-to-port')

console.log(toPort('example.com')) // returns 22019
```

## API

#### `var port = toPort(value)`

Hash the given value to a valid port (`>= 1024 <= 65535`).
The same value will *always* hash to the same port but note that two different values might hash to the same port as well

## License

MIT
