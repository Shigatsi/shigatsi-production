/**
title: Название привычки.
id: Уникальный идентификатор привычки.
isPinned: Флаг, закреплена ли привычка.
createdAt: Дата создания привычки.
lastEdit: Дата последнего редактирования привычки.
periodicity: Периодичность выполнения привычки (о ней ниже).
startDate: Дата начала отслеживания привычки.
endDate: Дата завершения (если привычка ограничена по времени).
completionCount: Количество завершений привычки.
goal: Количество дней/недель/месяцев, которые нужно выполнять привычку для достижения цели.
isActive: Активна ли привычка в данный момент.
 */
export const mockHabits = [
    {
      id: 1,
      title: 'Morning Exercise',
      isPinned: true,
      createdAt: '2024-10-01T07:00:00',
      lastEdit: '2024-10-05T07:00:00',
      periodicity: Periodicity.EveryDay,
      startDate: '2024-10-01',
      endDate: null, // если привычка не ограничена по времени
      completionCount: 5,
      goal: 30, // цель - выполнить 30 дней
      isActive: true,
    },
    {
      id: 2,
      title: 'Read a Book',
      isPinned: false,
      createdAt: '2024-10-02T10:00:00',
      lastEdit: '2024-10-05T11:30:00',
      periodicity: Periodicity.EveryWeek,
      startDate: '2024-10-02',
      endDate: '2024-12-31', // если цель ограничена по времени
      completionCount: 1,
      goal: 12, // цель - выполнить 12 недель
      isActive: true,
    },
    {
      id: 3,
      title: 'No Sugar',
      isPinned: true,
      createdAt: '2024-09-20T09:00:00',
      lastEdit: '2024-10-05T09:30:00',
      periodicity: Periodicity.EveryDay,
      startDate: '2024-09-20',
      endDate: null,
      completionCount: 15,
      goal: 100,
      isActive: true,
    },
    {
      id: 4,
      title: 'Go for a Walk',
      isPinned: false,
      createdAt: '2024-10-01T15:00:00',
      lastEdit: '2024-10-03T15:00:00',
      periodicity: Periodicity.EveryMonth,
      startDate: '2024-10-01',
      endDate: null,
      completionCount: 0,
      goal: 12, // 12 месяцев
      isActive: true,
    },
  ];
