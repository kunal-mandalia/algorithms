const assert = require('assert')
const toCollapsableTableDS = require('./index').toCollapsableTableDS

const ds1 = {
  attributes: {
    date: {},
    name: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur, i) => i === 0 ? cur.name : acc + ' ' + cur.name,
      initialValue: ''
    },
    goals: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur) => acc + cur.goals,
      initialValue: 0
    },
  },
  data: [
    {
      date: '2017',
      playerStats: [
        {
          name: 'Messi',
          goals: 2
        },
        {
          name: 'Saurez',
          goals: 1
        }
      ]
    },
  ]
}

const ds2 = {
  attributes: {
    date: {},
    name: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur, i) => i === 0 ? cur.name : acc + ' ' + cur.name,
      initialValue: ''
    },
    goals: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur) => acc + cur.goals,
      initialValue: 0
    },
  },
  data: [
    {
      date: '2017',
      playerStats: [
        {
          name: 'Messi',
          goals: 2
        },
        {
          name: 'Saurez',
          goals: 1
        }
      ]
    },
    {
      date: '2016',
      playerStats: [
        {
          name: 'Neymar',
          goals: 1
        }
      ]
    }
  ]
}

const ds3 = {
  attributes: {
    date: {},
    name: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur, i) => i === 0 ? cur.name : acc + ' ' + cur.name,
      initialValue: ''
    },
    goals: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur) => acc + cur.goals,
      initialValue: 0
    },
    minutes: {
      isDerived: true,
      source: 'playerStats',
      reducer: (acc, cur) => acc + cur.minutes,
      initialValue: 0
    }
  },
  data: [
    {
      date: '2017',
      playerStats: [
        {
          name: 'Messi',
          goals: 2,
          minutes: 90
        },
        {
          name: 'Saurez',
          goals: 1,
          minutes: 80
        }
      ],
    }
  ]
}


function isEqualStringified (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function test_toCollapsableTableDS () {
  const cases = [
    {
      input: ds1,
      expectedOutput: [
        {
          id: 0,
          parent: ['2017', 'Messi Saurez', 3],
          children: [
            [null, 'Messi', 2],
            [null, 'Saurez', 1]
          ]
        }
      ]
    },
    {
      input: ds2,
      expectedOutput: [
        {
          id: 0,
          parent: ['2017', 'Messi Saurez', 3],
          children: [
            [null, 'Messi', 2],
            [null, 'Saurez', 1]
          ]
        },
        {
          id: 1,
          parent: ['2016', 'Neymar', 1],
          children: [
            [null, 'Neymar', 1]
          ]
        }
      ]
    },
    {
      input: ds3,
      expectedOutput: [
        {
          id: 0,
          parent: ['2017', 'Messi Saurez', 3, 170],
          children: [
            [null, 'Messi', 2, 90],
            [null, 'Saurez', 1, 80]
          ]
        },
      ]
    },
  ]

  cases.forEach((c, i) => {
    const output = toCollapsableTableDS(c.input)
    assert(JSON.stringify(output) === JSON.stringify(c.expectedOutput),
    `Test ${i} failed.
      expected ${JSON.stringify(output)}
      to equal ${JSON.stringify(c.expectedOutput)}
    `)
  })
}
test_toCollapsableTableDS()
