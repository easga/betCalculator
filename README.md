# Tote Betting Dividends Calculator
This is a dividends calculator for a simplified form of Tote betting.

Tote betting involves punters choosing the outcome of a race by placing bets into a pool of money. Punters
who successfully predict the outcome of a race take a share of the pool proportional to their stake. For
example, a punter who places a $2 bet on a winning selection would receive twice the winnings of a punter
who placed a $1 stake. The betting house takes a commission out of the pool before it is split between winning punters.

## Running Locally
```
git clone https://github.com/easga/betCalculator.git
cd betCalculator
npm install
npm run dev
```

## Running the tests
```
npm test
```
## Supported bet types
It currently supports the following bet types:
  1.  WIN
    - Punters must choose the winner of a race
    - House takes a 15% commission from the Win pool
    - The remaining total is split, proportionally to stake, amongst punters who chose the correct winning horse.
  2. PLACE
    - Punters must choose the first, second or third place horse in a race
    - House takes a 12% commission from the Place pool
    - The total pool is split evenly into 3 and each of these amounts is then split, proportionally to stake,
amongst the punters who chose each placed horse
  3. EXACTA
    - Punters must choose the first and second place runners in a race in the correct order
    - House takes an 18% commission from the Exacta pool
    - The remaining total is split, proportionally to stake, amongst punters who chose the correct first and
second horse in correct order
  4. QUINELLA
    - Punters must choose the first and second place runners in a race in ANY​ order
    - Betting company takes an 18% commission from the Quinella pool
    - The remaining total is split, proportionally to stake, amongst punters who chose the correct first and second horse in ANY​order.

After a race has been run, the house publishes the dividends for each bet type. This is the return for a $1 stake
for each paying selection in the race. All dividends are calculated to the nearest $0.01.
