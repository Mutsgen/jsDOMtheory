export const createHomePage = async (pageNum = 1) => {
  if (pageNum < 0 || pageNum > 80 || isNaN(pageNum)) pageNum = 1;
  const response = await fetch(
    `https://gorest.co.in/public-api/posts?page=${pageNum}`
  );
  const data = await response.json();
  console.log(data);

  const container = document.querySelector(".container");
  const title = document.createElement("h1");
  const list = document.createElement("ol");

  container.innerHTML = "";
  title.innerText = "Статьи блога";

  for (let i = 0; i < data.data.length; i++) {
    const post = data.data[i];
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.innerText = post.title;
    a.setAttribute("href", `./index.html?postId=${post.id}`);
    li.append(a);
    list.append(li);
    console.log(li);
  }
  const url = new URL(location);
  let currentPage = url.searchParams.get("page") || 1;
  if (isNaN(currentPage) || currentPage < 1 || currentPage > 71)
    currentPage = 1;

  const pageChanger = document.createElement("div");
  const buttonFirst = document.createElement("a");
  const buttonPrev = document.createElement("a");
  const curPage = document.createElement("p");
  const buttonNext = document.createElement("a");
  const buttonLast = document.createElement("a");
  buttonFirst.textContent = "<<";
  buttonFirst.setAttribute("href", "./index.html");

  buttonPrev.textContent = "<";
  buttonPrev.setAttribute("href", `./index.html?page=${currentPage - 1}`);
  if (currentPage == 1)
    buttonPrev.setAttribute("href", `./index.html?page=${1}`);
  buttonNext.textContent = ">";
  buttonNext.setAttribute(
    "href",
    `./index.html?page=${Number(currentPage) + 1}`
  );
  console.log(currentPage);
  if (currentPage == 71)
    buttonNext.setAttribute("href", `./index.html?page=71`);
  buttonLast.textContent = ">>";
  buttonLast.setAttribute("href", `./index.html?page=${71}`);

  if (isNaN(currentPage)) currentPage = 1;
  curPage.textContent = currentPage;
  pageChanger.className = "page-changer";

  pageChanger.append(buttonFirst, buttonPrev, curPage, buttonNext, buttonLast);

  container.append(title, list, pageChanger);
};
