import { logger } from '../utils/logger';

export const loggerMiddleware = store => next => action => {
  logger.trace('Redux dispatching', action);
  const result = next(action);
  logger.trace('Redux Next State', store.getState());
  return result;
};

export const crashReporter = () => next => action => {
  try {
    return next(action);
  } catch (err) {
    logger.error('Redux Caught an exception!', err);
    throw err;
  }
};
