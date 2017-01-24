# Plesk XML-RPC API Client for Node.js

## Installation

```
npm install --save plesk-api-client
```

## Usage

```javascript
const pleskApi = require('plesk-api-client');
...
const client = new pleskApi.Client(host);
client.setCredentials(login, password);
client.request(request, (response) => {
    ...
});
```
