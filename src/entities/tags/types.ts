export interface ITag {
    id: number; // Уникальный идентификатор тега
    tag: string; // Название тега
    recordIds: number[]; // Массив id записей, к которым привязан тег
    createdAt: string; // Дата создания тега
    usageCount?: number; // (Опционально) Количество использований тега
    description?: string; // (Опционально) Описание тега
}
