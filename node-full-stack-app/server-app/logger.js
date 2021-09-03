const winston = require('winston');

const { LOG_LEVEL, NODE_ENV } = process.env;

const logLevel = LOG_LEVEL ?? 'error';
const nodeEnv = NODE_ENV ?? 'production';

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (nodeEnv !== 'production') {

  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );

}

module.exports.logger = logger;