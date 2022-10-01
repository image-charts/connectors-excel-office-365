var querystring = require("querystring-es3");
var crypto = require("crypto");

/**
 * Get an image-chart public url for an enterprise customer
 * @customfunction GET_URL
 * @param {string} url Your image-chart's url.
 * @param {string} accountId Your image-chart's account id.
 * @param {string} secretKey Your image-chart's secret key.
 * @returns {string} Your chart's public url.
 */
function getURL(url, accountId, secretKey) {
  function sign(secretKey, query) {
    return crypto.createHmac("sha256", secretKey).update(query).digest("hex");
  }

  var queryParams = querystring.parse(url.split("?")[1]);
  queryParams.icac = accountId;

  // // Then generate the watermark-free url
  var rawQuerystring = querystring.stringify(queryParams, null, null, {
    // no need to encode the query string, Image-Charts will decode every parameters by itself to check the signature
    // learn why in our documentation https://documentation.image-charts.com/enterprise/
    encodeURIComponent: function (valueWithoutEncoding) {
      return valueWithoutEncoding;
    },
  });

  var signature = sign(secretKey, rawQuerystring);
  var publicURL = "https://image-charts.com/chart?" + rawQuerystring + "&ichm=" + signature;

  return publicURL;
}
