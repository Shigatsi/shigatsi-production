export enum  Periodicity {
    EveryDay,
    EveryWeek,
    EveryMonth ,
    Custom , // для гибких настроек, например, "через день"
};


 export interface IHabit {
    id: number;              // Уникальный идентификатор
    title: string;           // Название привычки
    isPinned: boolean;       // Закреплена ли привычка
    createdAt: string;       // Дата создания привычки
    lastEdit: string;        // Дата последнего редактирования
    periodicity: Periodicity;// Периодичность выполнения
    startDate: string;       // Дата начала отслеживания привычки
    endDate?: string | null; // Дата завершения (необязательно)
    completionCount: number; // Количество выполнений привычки
    goal: number;            // Целевая цифра выполнения (например, 30 дней)
    isActive: boolean;       // Активна ли привычка
  }
