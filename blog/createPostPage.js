export const createPostPage = async () => {
  const url = new URL(location);
  let postId = url.searchParams.get("postId");
  console.log(postId);
  const response = await fetch(
    `https://gorest.co.in/public-api/posts/${postId}`
  );
  const data = await response.json();
  console.log(data);
  const container = document.querySelector(".container");
  const title = document.createElement("h1");
  const body = document.createElement("p");
  const comments = document.createElement("div");
  const comTitle = document.createElement("h3");
  comTitle.innerText = "Комментарии";
  comments.append(comTitle);

  title.innerText = data.data.title;
  body.innerText = data.data.body;

  const comRespond = await fetch(
    `https://gorest.co.in/public-api/comments?post_id=${postId}`
  );
  const comData = await comRespond.json();
  for (let i = 0; i < comData.data.length; i++) {
    const comment = comData.data[i];
    const comm = document.createElement("div");
    const name = document.createElement("h4");
    const email = document.createElement("h4");
    const body = document.createElement("p");
    name.innerText = comment.name;
    email.innerText = comment.email;
    body.innerText = comment.body;
    comm.append(name, email, body);
    comments.append(comm);
  }
  console.log(comData);

  container.append(title, body, comments);
};
