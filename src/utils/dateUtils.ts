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

function addDateSuffix(date: Date): string {
  const day = date.getDate();
  // eslint-disable-next-line prettier/prettier
  const suffix = ['th', 'st', 'nd', 'rd'][day % 10 === 1 && day !== 11 ? 1 : day % 10 === 2 && day !== 12 ? 2 : day % 10 === 3 && day !== 13 ? 3 : 0];
  return `${day}${suffix}`;
}

export function getDateWithoutDayTxt(daysFromNow: number): string {
  const today = new Date();
  const nextDate = new Date(today.getTime() + daysFromNow * 24 * 60 * 60 * 1000);
  const formattedDate =
    addDateSuffix(nextDate) + ' ' + nextDate.toLocaleDateString('en-AU', { month: 'long' });
  return formattedDate;
}
