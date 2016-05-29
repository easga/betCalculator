import { delimiter } from '../constants/characters';
import { logger } from '../utils/logger';
import { isValidResult } from '../utils/validator';
import { resultsPatternError, somethingWentWrong, sameRunnerInResults } from '../constants/messages';
import { sanitize, isArrayUnique } from './commons';

const parseResult = result => {
  if (!isValidResult(result)) {
    logger.info(`Result: ${result} - ${resultsPatternError}`);
    throw new Error(resultsPatternError);
  }
  const sanitizedResult = sanitize(result);
  const resultDescriptor = sanitizedResult.split(delimiter);
  if (resultDescriptor.length < 4) {
    logger.error(`Result: ${result} - ${somethingWentWrong}`);
    throw new Error(somethingWentWrong);
  }
  const resultsArray = resultDescriptor.slice(1).map(runner => parseInt(runner));
  if (!isArrayUnique(resultsArray)) {
    logger.info(`Result: ${result} - ${sameRunnerInResults}`);
    throw new Error(sameRunnerInResults);
  }
  return resultDescriptor.slice(1).map(runner => parseInt(runner));
};

export default parseResult;
