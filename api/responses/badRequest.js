module.exports = function badRequest(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;
  var moment = require('moment')
  var timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
  var stackMessage = { message: 'Invalid parameters' }
  // Define the status code to send in the response.
  var statusCodeToSet = 400;
  var dataToSend = optionalData ? optionalData : stackMessage
  sails.log.error({ timestamp, controller: req.options.controller, action: req.options.action, message: dataToSend.message })
  return res.status(statusCodeToSet).send(dataToSend);
};
