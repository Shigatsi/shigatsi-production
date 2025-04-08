interface Note {
    id: number;              // Уникальный идентификатор
    title: string;           // Заголовок заметки
    createdAt: string;       // Дата создания
    lastEdit: string;        // Дата последнего редактирования
    tags: string[];          // Массив тегов, связанных с заметкой
    content: string;         // Содержимое заметки
    isPinned: boolean;       // Закреплена ли заметка
  }
