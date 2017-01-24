const http = require('http');
const https = require('https');

class Client {

  constructor(host, port, protocol) {
    this._host = host;
    this._port = port || 8443;
    this._protocol = protocol || 'https';
  }

  setCredentials(login, password) {
    this._login = login;
    this._password = password;
  }

  setSecretKey(secretKey) {
    this._secretKey = secretKey;
  }

  request(body, callback) {
    let headers = {
      'Content-Type': 'text/xml',
      'HTTP_PRETTY_PRINT': 'TRUE',
      'Content-Length': body.length
    };

    if (this._secretKey) {
      headers['KEY'] = this._secretKey;
    } else {
      headers['HTTP_AUTH_LOGIN'] = this._login;
      headers['HTTP_AUTH_PASSWD'] = this._password;
    }

    const options = {
      host: this._host,
      port: this._port,
      path: '/enterprise/control/agent.php',
      method: 'POST',
      headers: headers
    };

    const client = 'https' == this._protocol ? https : http;
    const request = client.request(options, (response) => {
      let result = '';
      response.on('data', (chunk) => result += chunk);
      response.on('end', () => callback(result));
    });
    request.write(body);
    request.end();
  }

}

exports.Client = Client;
