import { delimiter, separator } from '../constants/rules';
import { logger } from '../utils/logger';

const parseBet = bet => {
  const betArray = bet.trim().toUpperCase().split(delimiter);
  if (betArray.length < 3) {
    logger.error('Something went wrong with parsing the bet');
    return null;
  }
  return {
    type: betArray[0],
    horses: betArray[1].split(separator).map(horse => parseInt(horse)),
    stake: parseInt(betArray[2])
  };
};

export default parseBet;
