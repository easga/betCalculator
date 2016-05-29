import { hyphen, dollars, separator } from '../constants/characters';
import { betNames } from '../constants/bets';
import { logger } from '../utils/logger';
import { noBets, noWinners, somethingWentWrongWithRunners, noCommissions } from '../constants/messages';
import { isEmpty } from './commons';

const takeCommission = (total, commission) => total * (1 - commission / 100);
const dividendToString = (betName, runners, dividend) => {
  const runnerString = runners.length > 1 ?
    `Runners ${runners[0]}${separator}${runners[1]}` :
    `Runner ${runners[0]}`;
  return `${betName} ${hyphen} ${runnerString} ${hyphen} ${dollars}${dividend.toFixed(2)}`;
};

const calculateMatch = (betName, bets, totalStakes, winningRunners, condition, runnersToDisplay) => {
  if (!bets) { return `${betName} ${hyphen} ${noBets}`; }
  const totalWinningStakes = bets.reduce(
    (prev, curr) => {
      if (condition(curr.runners, winningRunners)) {
        return prev + curr.stake;
      }
      return prev;
    }, 0);
  if (!(totalWinningStakes > 0)) {
    return `${betName} ${hyphen} ${noWinners}`;
  }
  const dividend = totalStakes / totalWinningStakes;
  return dividendToString(betName, runnersToDisplay, dividend);
};

const calculateWin = (betName, bets, totalStakes, runners, condition) =>
  [calculateMatch(betName, bets, totalStakes, runners, condition, [runners[0]])];

const calculatePlace = (betName, bets, totalStakes, runners, condition) => {
  const totalStakesAfterSplit = totalStakes / 3;
  return runners.map(runner => calculateMatch(betName, bets, totalStakesAfterSplit, [runner], condition, [runner]));
};
const calculateExact = (betName, bets, totalStakes, runners, condition) =>
  [calculateMatch(betName, bets, totalStakes, runners, condition, runners.slice(0, 2))];

const calculateQuinella = (betName, bets, totalStakes, runners, condition) =>
  [calculateMatch(betName, bets, totalStakes, runners, condition, runners.slice(0, 2))];

const dividendsRules = {
  W: {
    calculator: calculateWin,
    matchCondition: (bettedRunners, winningRunners) => bettedRunners[0] === winningRunners[0]
  },
  P: {
    calculator: calculatePlace,
    matchCondition: (bettedRunners, winningRunners) => bettedRunners[0] === winningRunners[0]
  },
  E: {
    calculator: calculateExact,
    matchCondition: (bettedRunners, winningRunners) =>
      bettedRunners[0] === winningRunners[0] && bettedRunners[1] === winningRunners[1]
  },
  Q: {
    calculator: calculateQuinella,
    matchCondition: (bettedRunners, winningRunners) =>
      winningRunners.slice(0, 2).indexOf(bettedRunners[0]) > -1 && winningRunners.indexOf(bettedRunners[1]) > -1
  },
};

const validateState = (bets, commissions, runners) => {
  if (isEmpty(bets)) {
    logger.error(noBets);
    throw new Error(noBets);
  }
  if (isEmpty(commissions)) {
    logger.error(noCommissions);
    throw new Error(noCommissions);
  }
  if (!runners || runners.length < 3) {
    logger.error(somethingWentWrongWithRunners);
    throw new Error(somethingWentWrongWithRunners);
  }
  return;
};

const calculateDividends = (allBets, commissions, runners) => {
  validateState(allBets, commissions, runners);
  return Object.keys(betNames).reduce(
    (prev, curr) => {
      const betName = betNames[curr];
      const betsObj = allBets[curr];
      const commission = commissions[curr];
      if (!betsObj || !commission) { return prev; }
      const totalStakesAfterCommission = takeCommission(betsObj.totalStakes, commission);
      const { calculator, matchCondition } = dividendsRules[curr];
      const dividends = [
        ...prev,
        ...calculator(betName, betsObj.bets, totalStakesAfterCommission, runners, matchCondition)
      ];
      return dividends;
    }, {});
};

export default calculateDividends;
