import URL from 'url';
import fs from 'fs';
import http from 'http';
import https from 'https';
import formstream from 'formstream';

/* eslint-disable */
class Request {
  /**
   * Request URL
   * @param {*} url 
   * @param {*} method
   * @param {*} headers
   * @param {*} data
   */
  request(url, method, headers, data) {
    return new Promise((resolve, reject) => {
      data = JSON.stringify(data);
      url = URL.parse(url);

      const options = {
        hostname: url.hostname,
        path: url.path,
        method,
        port: url.port,
        headers,
      };
      const req = http.request(options, (res) => {
        // if (res.statusCode !== 200) {
        //   reject('Error occurred!')
        // }
        res.setEncoding('binary');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => resolve(rawData));
      });

      req.on('error', (e) => {
        reject(e)
      });
      // write data to request body
      req.write(data);
      req.end();
    });
  }

  /**
   * Request secure URLs like HTTPS
   * @param {*} url
   * @param {*} method
   * @param {*} headers
   * @param {*} data
   */
  requestSecure(url, method, headers, data) {
    return new Promise((resolve, reject) => {
      // data = JSON.stringify(data);

      url = URL.parse(url);
      const options = {
        hostname: url.hostname,
        path: url.path,
        method,
        port: url.port,
        headers,
      };
      const req = https.request(options, (res) => {
        if (res.statusCode !== 200) {
          reject(res);
        }
        res.setEncoding('utf-8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => resolve(rawData));
      });

      req.on('error', (e) => {
        reject(e)
      });

      // write data to request body
      if (data) req.write(data);
      req.end();
    });
  }

  /**
   * Request headers data
   * @param {*} url
   * @param {*} method
   * @param {*} headers
   * @param {*} data
   */
  requestHeaders(url, method, headers, data) {
    return new Promise((resolve, reject) => {
      data = JSON.stringify(data);

      url = URL.parse(url);
      const options = {
        hostname: url.hostname,
        path: url.path,
        method,
        port: url.port,
        headers,
      };
      const req = http.request(options, res => resolve(res.headers));

      req.on('error', (e) => {
        reject(e)
      });

      // write data to request body
      if (data) req.write(data);
      req.end();
    });
  }

  /**
   * Request form data
   * @param {*} url
   * @param {*} method
   * @param {*} headers
   * @param {*} data
   * @param {*} cookie
   * @param {*} accessToken
   * @param {*} filePath
   */
  formRequest(url, method, headers, data, cookie, accessToken, filePath) {
    const form = formstream();

    return new Promise((resolve, reject) => {
      form.file('card', filePath, 'test.zip');
      url = URL.parse(url);
      headers['Content-Type'] = form.headers()['Content-Type'];
      const options = {
        hostname: url.hostname,
        path: url.path,
        method,
        port: url.port,
        headers,
      };


      const req = http.request(options, (res) => {
        // res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          fs.unlinkSync(filePath);
          return resolve(rawData);
        });
      });
      req.on('error', (e) => {
        reject(e)
      });
      form.pipe(req);
    });
  }
}

export default new Request();
