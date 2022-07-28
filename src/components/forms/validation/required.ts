export default (value: string) => (value?.trim() ? undefined : 'Поле не заполнено');

// Для тестирования
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export default (value: string) => undefined;
