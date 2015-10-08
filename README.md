# hostname-to-port

Hash a hostname to a valid port

```
npm install hostname-to-port
```

[![build status](http://img.shields.io/travis/mafintosh/hostname-to-port.svg?style=flat)](http://travis-ci.org/mafintosh/hostname-to-port)

## Usage

``` js
var toPort = require('hostname-to-port')

console.log(toPort('example.com')) // returns 22019
```

## API

#### `var port = toPort(hostname)`

Hash the given hostname to a valid port (`>= 1024 <= 65535`).
The same hostname will *always* hash to the same port but note that two different hostnames might hash to the same port as well

## License

MIT
