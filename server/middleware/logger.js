import { Logger, transports } from 'winston';
import { JL as jl } from 'jsnlog';
import { jsnlog_nodejs } from 'jsnlog-nodejs'; // eslint-disable-line camelcase
import colors from 'colors';

import serverConfig from '../config';

const logFileName = './app.log';
const defaultLogLevel = 'debug';
const logLevel = serverConfig.logLevel || defaultLogLevel;
if (!serverConfig.logLevel) {
  console.error(`LOGGER ERROR: config does not specify log level; using the default: ${logLevel}`); // eslint-disable-line no-console
}

const timestamp = () => new Date().toUTCString();

const getLogLevelColor = level => {
  switch (level) {
  case 'TRACE':
    return colors.magenta;
  case 'DEBUG':
    return colors.blue;
  case 'INFO':
    return colors.rainbow;
  case 'WARN':
    return colors.yellow;
  case 'ERROR':
    return colors.red;
  case 'FATALERROR':
    return colors.red;
  default:
    return colors.grey;
  }
};

const getLogMessageColorByLevel = level => {
  switch (level) { // overrides
  case 'INFO':
    return colors.white;
  default:
    return getLogLevelColor(level);
  }
};

const formatter = options => {
  const upperLogLevel = options.level.toUpperCase();
  const levelColor = getLogLevelColor(upperLogLevel);
  const messageColor = getLogMessageColorByLevel(upperLogLevel);
  const logTimestamp = colors.white.dim((options.timestamp()));
  const formattedLogLevel = levelColor(upperLogLevel);
  const message = messageColor(options.message || '');
  const metadata = messageColor((options.meta && Object.keys(options.meta).length) ? '\n\t' + JSON.stringify(options.meta) : '');
  return `${logTimestamp}: \n ${formattedLogLevel}: ${message}${metadata}`;
};

const consoleTransport = new transports.Console({
  colorize: true,
  prettyPrint: true,
  level: logLevel,
  timestamp: timestamp,
  formatter: formatter
});

const fileTransport = new transports.File({
  filename: logFileName,
  prettyPrint: true,
  level: logLevel,
  timestamp: timestamp,
  formatter: formatter
});

const logTransports = [
  consoleTransport,
  fileTransport
];

jl().setOptions({ appenders: logTransports });

const getLogger = () => {
  const logger = new Logger({
    transports: logTransports,
    colorize: true
  });
  logger.logLevel = logLevel;
  return logger;
};

export const ajaxLogger = (req, res) => {
  jsnlog_nodejs(jl, req.body);
  res.end();
};

export const logger = getLogger();
