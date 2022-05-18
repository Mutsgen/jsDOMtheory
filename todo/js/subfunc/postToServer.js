export const postToServer = async (
  _name,
  _owner,
  _done,
  _time = new Data()
) => {
  await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    body: JSON.stringify({
      name: _name,
      owner: _owner,
      done: _done,
      time: _time,
    }),
  });
};
