# The Eye of Horus



```js
const horus = require('@chlin13/the-eye-of-horus');

horus.send(timestamp(nano sec), table name, value, Server running URL);
```

## Install
```
npm i @chlin13/the-eye-of-horus
```

## Features
*  Collecting application performance data

## Options
Specify the URL of your Server running URL
```js
require('@chlin13/the-eye-of-horus').config('http://localhost:3000');
const horus = require('@chlin13/the-eye-of-horus');

horus.send(timestamp(nano sec), table name, value);
```