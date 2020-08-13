const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let dayText = day.toString();
  if (day < 10) dayText = `0${dayText}`;
  return `${months[month]} ${dayText} / ${year}`;
};

export default formatDate;
