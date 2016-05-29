export const validBetsMock = [
  'w:1:3',
  'w:2:4',
  'w:3:5',
  'w:4:5',
  'w:1:16',
  'w:2:8',
  'w:3:22',
  'w:4:57',
  'w:1:42',
  'w:2:98',
  'w:3:63',
  'w:4:15',
  'p:1:31',
  'p:2:89',
  'p:3:28',
  'p:4:72',
  'p:1:40',
  'p:2:16',
  'p:3:82',
  'p:4:52',
  'p:1:18',
  'p:2:74',
  'p:3:39',
  'p:4:105',
  'e:1,2:13',
  'e:2,3:98',
  'e:1,3:82',
  'e:3,2:27',
  'e:1,2:5',
  'e:2,3:61',
  'e:1,3:28',
  'e:3,2:25',
  'e:1,2:81',
  'e:2,3:47',
  'e:1,3:93',
  'e:3,2:51',
  'q:1,2:19',
  'q:2,3:77',
  'q:1,3:26',
  'q:2,4:63',
  'q:1,2:66',
  'q:2,3:82',
  'q:1,3:90',
  'q:2,4:48',
  'q:1,2:18',
  'q:2,3:93',
  'q:1,3:62',
  'q:2,4:25'
];

export const inValidBetsMock = [
  '',
  'aaa',
  'a:2;2',
  'q:22;2',
  'w:2,2:45',
  'p:2w:2'
];

export const validBetsState = {
  W: {
    bets: [
      {
        value: 'W:1:3',
        type: 'W',
        runners: [
          1
        ],
        stake: 3
      },
      {
        value: 'W:2:4',
        type: 'W',
        runners: [
          2
        ],
        stake: 4
      },
      {
        value: 'W:3:5',
        type: 'W',
        runners: [
          3
        ],
        stake: 5
      },
      {
        value: 'W:4:5',
        type: 'W',
        runners: [
          4
        ],
        stake: 5
      },
      {
        value: 'W:1:16',
        type: 'W',
        runners: [
          1
        ],
        stake: 16
      },
      {
        value: 'W:2:8',
        type: 'W',
        runners: [
          2
        ],
        stake: 8
      },
      {
        value: 'W:3:22',
        type: 'W',
        runners: [
          3
        ],
        stake: 22
      },
      {
        value: 'W:4:57',
        type: 'W',
        runners: [
          4
        ],
        stake: 57
      },
      {
        value: 'W:1:42',
        type: 'W',
        runners: [
          1
        ],
        stake: 42
      },
      {
        value: 'W:2:98',
        type: 'W',
        runners: [
          2
        ],
        stake: 98
      },
      {
        value: 'W:3:63',
        type: 'W',
        runners: [
          3
        ],
        stake: 63
      },
      {
        value: 'W:4:15',
        type: 'W',
        runners: [
          4
        ],
        stake: 15
      }
    ],
    totalStakes: 338
  },
  P: {
    bets: [
      {
        value: 'P:1:31',
        type: 'P',
        runners: [
          1
        ],
        stake: 31
      },
      {
        value: 'P:2:89',
        type: 'P',
        runners: [
          2
        ],
        stake: 89
      },
      {
        value: 'P:3:28',
        type: 'P',
        runners: [
          3
        ],
        stake: 28
      },
      {
        value: 'P:4:72',
        type: 'P',
        runners: [
          4
        ],
        stake: 72
      },
      {
        value: 'P:1:40',
        type: 'P',
        runners: [
          1
        ],
        stake: 40
      },
      {
        value: 'P:2:16',
        type: 'P',
        runners: [
          2
        ],
        stake: 16
      },
      {
        value: 'P:3:82',
        type: 'P',
        runners: [
          3
        ],
        stake: 82
      },
      {
        value: 'P:4:52',
        type: 'P',
        runners: [
          4
        ],
        stake: 52
      },
      {
        value: 'P:1:18',
        type: 'P',
        runners: [
          1
        ],
        stake: 18
      },
      {
        value: 'P:2:74',
        type: 'P',
        runners: [
          2
        ],
        stake: 74
      },
      {
        value: 'P:3:39',
        type: 'P',
        runners: [
          3
        ],
        stake: 39
      },
      {
        value: 'P:4:105',
        type: 'P',
        runners: [
          4
        ],
        stake: 105
      }
    ],
    totalStakes: 646
  },
  E: {
    bets: [
      {
        value: 'E:1,2:13',
        type: 'E',
        runners: [
          1,
          2
        ],
        stake: 13
      },
      {
        value: 'E:2,3:98',
        type: 'E',
        runners: [
          2,
          3
        ],
        stake: 98
      },
      {
        value: 'E:1,3:82',
        type: 'E',
        runners: [
          1,
          3
        ],
        stake: 82
      },
      {
        value: 'E:3,2:27',
        type: 'E',
        runners: [
          3,
          2
        ],
        stake: 27
      },
      {
        value: 'E:1,2:5',
        type: 'E',
        runners: [
          1,
          2
        ],
        stake: 5
      },
      {
        value: 'E:2,3:61',
        type: 'E',
        runners: [
          2,
          3
        ],
        stake: 61
      },
      {
        value: 'E:1,3:28',
        type: 'E',
        runners: [
          1,
          3
        ],
        stake: 28
      },
      {
        value: 'E:3,2:25',
        type: 'E',
        runners: [
          3,
          2
        ],
        stake: 25
      },
      {
        value: 'E:1,2:81',
        type: 'E',
        runners: [
          1,
          2
        ],
        stake: 81
      },
      {
        value: 'E:2,3:47',
        type: 'E',
        runners: [
          2,
          3
        ],
        stake: 47
      },
      {
        value: 'E:1,3:93',
        type: 'E',
        runners: [
          1,
          3
        ],
        stake: 93
      },
      {
        value: 'E:3,2:51',
        type: 'E',
        runners: [
          3,
          2
        ],
        stake: 51
      }
    ],
    totalStakes: 611
  },
  Q: {
    bets: [
      {
        value: 'Q:1,2:19',
        type: 'Q',
        runners: [
          1,
          2
        ],
        stake: 19
      },
      {
        value: 'Q:2,3:77',
        type: 'Q',
        runners: [
          2,
          3
        ],
        stake: 77
      },
      {
        value: 'Q:1,3:26',
        type: 'Q',
        runners: [
          1,
          3
        ],
        stake: 26
      },
      {
        value: 'Q:2,4:63',
        type: 'Q',
        runners: [
          2,
          4
        ],
        stake: 63
      },
      {
        value: 'Q:1,2:66',
        type: 'Q',
        runners: [
          1,
          2
        ],
        stake: 66
      },
      {
        value: 'Q:2,3:82',
        type: 'Q',
        runners: [
          2,
          3
        ],
        stake: 82
      },
      {
        value: 'Q:1,3:90',
        type: 'Q',
        runners: [
          1,
          3
        ],
        stake: 90
      },
      {
        value: 'Q:2,4:48',
        type: 'Q',
        runners: [
          2,
          4
        ],
        stake: 48
      },
      {
        value: 'Q:1,2:18',
        type: 'Q',
        runners: [
          1,
          2
        ],
        stake: 18
      },
      {
        value: 'Q:2,3:93',
        type: 'Q',
        runners: [
          2,
          3
        ],
        stake: 93
      },
      {
        value: 'Q:1,3:62',
        type: 'Q',
        runners: [
          1,
          3
        ],
        stake: 62
      },
      {
        value: 'Q:2,4:25',
        type: 'Q',
        runners: [
          2,
          4
        ],
        stake: 25
      }
    ],
    totalStakes: 669
  }
};
