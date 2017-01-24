# Plesk XML-RPC API Client for Node.js

## Installation

```
npm install --save plesk-api-client
```

## Usage

Basic usage:

```javascript
const pleskApi = require('plesk-api-client');
...
request =
`<packet>
  <server>
    <get_protos/>
  </server>
</packet>`;
...
const client = new pleskApi.Client(host);
client.setCredentials(login, password);
client.request(request, (response) => {
    ...
});
```

Usage with promise:

```javascript
...
client.request(request)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

Usage with self-signed certificates on 8443 port:

```javascript
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
...
client.request(...
```