import { delimiter, separator } from '../constants/characters';
import { logger } from '../utils/logger';
import { isValidBet } from '../utils/validator';
import { betPatternError, bettingSameRunnerNotAllowed, somethingWentWrong } from '../constants/messages';
import { sanitize, isArrayUnique } from './commons';

const parseBet = bet => {
  if (!isValidBet(bet)) {
    logger.info(`Bet: ${bet} - ${betPatternError}`);
    throw new Error(betPatternError);
  }
  const sanitizedBet = sanitize(bet);
  const betDescriptor = sanitizedBet.split(delimiter);
  if (betDescriptor.length < 3) {
    logger.error(`Bet: ${bet} - ${somethingWentWrong}`);
    throw new Error(somethingWentWrong);
  }
  const runners = betDescriptor[1].split(separator).map(horse => parseInt(horse));
  if (!isArrayUnique(runners)) {
    logger.info(bettingSameRunnerNotAllowed);
    throw new Error(bettingSameRunnerNotAllowed);
  }
  return {
    value: sanitizedBet,
    type: betDescriptor[0],
    runners,
    stake: parseInt(betDescriptor[2])
  };
};

export default parseBet;
