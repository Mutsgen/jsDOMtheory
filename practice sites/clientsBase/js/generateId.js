export const generateId = (array) => {
  const generatedId = Math.round(Math.random() * 1000000 + 100000);
  for (let el = 0; el < array.length; el++) {
    const element = array[el];
    if (element.id === generatedId) return false;
  }
  return generatedId;
};
