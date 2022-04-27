# The Eye of Horus



```js
const horus = require('./horus');

horus.send(timestamp(nano sec), host name, table name, value Server running URL);
```

## Install
```
npm i @chlin13/the-eye-of-horus
```

## Features
*  Post data to influDB

## Options
Specify the URL of your Server running URL
```js
require('./horus').config('http://localhost:3000');
const horus = require('./horus');

horus.send(timestamp(nano sec), host name, table name, value);
```