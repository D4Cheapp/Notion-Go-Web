export const handleDateToString = (date: string): string => {
  const isTimeExist = date.includes('T');
  const day = (isTimeExist ? date.split('T')[0] : date).split('-');
  const time = isTimeExist ? date.split('T')[1].split('.')[0] : null;
  return (
    `${day[2]}/${day[1]}/${day[0]}` + (time !== null ? ' ' + time.slice(0, time.length - 3) : '')
  );
};
