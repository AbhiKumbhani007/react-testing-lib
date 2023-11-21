export const FetchData = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  return await res.json();
};
