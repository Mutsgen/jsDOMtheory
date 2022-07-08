export const sendForm = async () => {
  const form = document.querySelector(".popup_form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = document.querySelector("input[type=text]");
    const tel = document.querySelector("input[type=tel]");
    const email = document.querySelector("input[type=email]");

    const sendObject = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObject),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
};
