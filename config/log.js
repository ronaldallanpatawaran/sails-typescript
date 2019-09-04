const winston = require('winston')
const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'warn', 'timestamp': true, 'colorize': true, })
    // new winston.transports.File({ filename: 'logs/combined.log', level: 'debug', 'timestamp': true, 'colorize': true, }),
  ]
});
 
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple())
  }));
}
module.exports.log = {
  // Pass in our custom logger, and pass all log levels through.
  custom: logger,
  level: 'info',
  colorize: true,
  // Disable captain's log so it doesn't prefix or stringify our meta data.
  inspect: false
};