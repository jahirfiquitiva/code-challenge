const calculateTimeAgo = (date) => {
  const now = new Date();
  const months = now.getMonth() - date.getMonth();
  return months.toString();
};

export default calculateTimeAgo;
