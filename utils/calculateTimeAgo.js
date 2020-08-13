const calculateTimeAgo = (date) => {
  const now = new Date();
  const months = now.getMonth() - date.getMonth();
  const years = now.getFullYear() - date.getFullYear();
  const monthsCount = months + (12 * years);
  return monthsCount.toString();
};

export default calculateTimeAgo;
