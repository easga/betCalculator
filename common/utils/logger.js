import { JL } from 'jsnlog';
import configs from '../config';

const clientLogName = 'Client-Log';
const defaultLogLevel = 'debug';
const logLevel = configs.logLevel || defaultLogLevel;

const logLevelNamesToNumbers = {
  all: JL.getAllLevel(),
  debug: JL.getDebugLevel(),
  error: JL.getErrorLevel(),
  fatal: JL.getFatalLevel(),
  info: JL.getInfoLevel(),
  trace: JL.getTraceLevel(),
  warn: JL.getWarnLevel()
};

const clientLogger = JL(clientLogName); // eslint-disable-line new-cap
const currentLogLevel = logLevelNamesToNumbers[logLevel];

clientLogger.setOptions({ // TODO: Enable simultaneous console & AJAX logging (VIAPRIMEWEB-113)
  level: currentLogLevel
});

function getLogMessage (message, metadataObjects) {
  let logMessage = message;
  if (metadataObjects.length) { logMessage += '| Metadata: ' + JSON.stringify(metadataObjects); }
  return logMessage;
}

const mapLogLevelNamesToShimFunctions = () => {
  return Object.keys(logLevelNamesToNumbers).reduce((accumulator, current) => {
    accumulator[current] = (message, ...metadata) => {
      if (currentLogLevel > logLevelNamesToNumbers[current]) { return; }
      clientLogger[current](getLogMessage(message, metadata));
    };
    return accumulator;
  }, {});
};

const logger = mapLogLevelNamesToShimFunctions();
logger.fatalException = (...args) => clientLogger.fatalException(...args);

export { logger };
