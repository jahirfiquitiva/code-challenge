const fetcher = async (...args) => {
  const request = await fetch(...args);
  return request.json();
};

export default fetcher;
