# The Eye of Horus - npm
## Features
*  Collecting application performance data

## Install
```
npm i @chlin13/the-eye-of-horus
```

```js
const horus = require('@chlin13/the-eye-of-horus');

horus.send(timestamp(nano sec), table name, value, Server running URL);
```

## Options
Specify the URL of your Server running URL
```js
require('@chlin13/the-eye-of-horus').config('http://localhost:3000');
const horus = require('@chlin13/the-eye-of-horus');

horus.send(timestamp(nano sec), table name, value);
```

## Reference
This module is utilized by [The Eye of Horus](https://github.com/CHLin13/The-Eye-of-Horus).