# Algorithms [![CircleCI](https://circleci.com/gh/kunal-mandalia/algorithms.svg?style=svg)](https://circleci.com/gh/kunal-mandalia/algorithms)

A collection of unit tested algorithms, from bubble to merge sort.

## Install
`yarn install`

## Run tests
`yarn test`

## Notes on specific algorithms

### flatten.js
#### How it works
The function `flattenToParentChildren` takes objects like the following:

```
{
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
```

and outputs:

```
[
  {
    id: 0,
    parent: ['2017', 'Messi Saurez', 3],
    children: [
      [null, 'Messi', 2],
      [null, 'Saurez', 1]
    ]
  }
]
```

This can be useful for e.g. showing / hiding detailed information in `children` such as bank transactions. Derived data is also aggregated.
