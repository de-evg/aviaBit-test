const Method = {
  GET: `GET`,
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

class Api {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getFlights(url) {
    return this._load({url: url})
      .then(Api.toJSON)
      .catch((err) => {
        throw console.log(err);
      });
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers({"Accept": "application/json"}),
    mode = "cors"
  }) {
    return fetch(`${this._endPoint}${url}`, {
      method,
      body,
      headers,
      mode
    })
      .then(Api.checkStatus)
      .catch((err) => {
        throw console.log(err);
      });
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}

export default Api;
