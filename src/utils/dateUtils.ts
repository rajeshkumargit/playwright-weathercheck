export function getDateInFormat(daysFromNow: number): string {
  const today = new Date();
  const nextDate = new Date(today.getTime() + daysFromNow * 24 * 60 * 60 * 1000);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  return nextDate.toLocaleDateString('en-AU', options).replace(',', '');
}
