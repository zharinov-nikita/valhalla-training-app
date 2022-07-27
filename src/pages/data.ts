export const data = {
  user: {
    _id: '1',
    name: 'Данил',
    login: 'zharinov-danil',
    password: 'password',

    plans: {
      _id: '1',
      title: 'Лыжная подготовка план',
      description: 'Лыжная подготовка к сезону 2021 - 2022',
      start: '0000',
      finish: '1111',
      status: 'Запланировано',

      periods: [
        {
          _id: '1',
          title: 'Подготовительный период',
          description: 'Подготовительный период',
          start: '0000',
          finish: '1111',
          status: 'Запланировано',

          cycles: [
            {
              _id: '1',
              title: 'Первый цикл',
              description: 'Подготовительный период',
              start: '0000',
              finish: '1111',
              status: 'Запланировано',

              days: [
                {
                  _id: '1',
                  title: 'Первый день',
                  description: 'Подготовительный период',
                  start: '0000',
                  finish: '1111',
                  completed: true,

                  workouts: [
                    {
                      _id: '1',
                      type: 'Сила',
                      start: '0000',
                      finish: '1111',
                      completed: false,

                      exercise: [
                        {
                          _id: '1',
                          title: 'Подтягивния',
                          description: 'Подтягивания',
                          completed: false,
                          option: [
                            {
                              _id: '1',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                            {
                              _id: '2',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  _id: '2',
                  title: 'Первый день',
                  description: 'Подготовительный период',
                  start: '0000',
                  finish: '1111',
                  completed: true,

                  workouts: [
                    {
                      _id: '1',
                      type: 'Сила',
                      start: '0000',
                      finish: '1111',
                      completed: false,

                      exercise: [
                        {
                          _id: '1',
                          title: 'Подтягивния',
                          description: 'Подтягивания',
                          completed: false,
                          option: [
                            {
                              _id: '1',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                            {
                              _id: '2',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  _id: '3',
                  title: 'Третий день',
                  description: 'Подготовительный период',
                  start: '0000',
                  finish: '1111',
                  completed: true,

                  workouts: [
                    {
                      _id: '1',
                      type: 'Сила',
                      start: '0000',
                      finish: '1111',
                      completed: false,

                      exercise: [
                        {
                          _id: '1',
                          title: 'Подтягивния',
                          description: 'Подтягивания',
                          completed: false,
                          option: [
                            {
                              _id: '1',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                            {
                              _id: '2',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      _id: '2',
                      type: 'Сила',
                      start: '0000',
                      finish: '1111',
                      completed: false,

                      exercise: [
                        {
                          _id: '1',
                          title: 'Подтягивния',
                          description: 'Подтягивания',
                          completed: false,
                          option: [
                            {
                              _id: '1',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                            {
                              _id: '2',
                              key: 'Количество (раз)',
                              value: 12,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
}
