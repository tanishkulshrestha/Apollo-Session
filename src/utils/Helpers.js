import qs from 'query-string';

export class Helpers {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  static checkToken(options) {
    if (!options.token) {
      return false;
    }
    return true;
  }

  static handleResponse(res) {
    const result = JSON.parse(res);
    if (result.status === 200) {
      return result;
    }
    throw result;
  }

  getHeaders(token, payload) {
    const headers = {
      ...this.defaultHeaders,
      'Authorization': `Bearer${token}`,
    }

    if (payload) {
      headers['Content-Length'] = Buffer.byteLength(JSON.stringify(payload));
    }

    return headers;
  }

  static getQueryString(params) {
    if (!Object.keys(params).length) {
      return null;
    }

    const queryString = qs.stringify(params);
    return `?${queryString}`;
  }
}

export default new Helpers();
