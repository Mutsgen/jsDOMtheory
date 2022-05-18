export const getFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todos");
  const data = await response.json();
  console.log(data);
  return data;
};
