export const add1Minute = (date: Date): Date =>
  new Date(date.getTime() + (1 * 60 * 1000));

export const formatDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleDateString('fr-FR', options);
};

export const formatTaskTime = (duration: number): string => {
  const minutes = duration % 60 !== 0 ? `${duration % 60}min` : '';
  return (duration < 60
    ? `${minutes}`
    : `${Math.floor(duration / 60)}h${minutes}`);
};
