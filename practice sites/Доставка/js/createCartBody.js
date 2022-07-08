export const createCartBody = () => {
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const modalBody = document.querySelector(".modal-body");
  const finalPrice = document.querySelector(".modal-pricetag");
  modalBody.innerHTML = "";
  cartList.forEach((food) => {
    const foodRow = document.createElement("div");
    foodRow.className = "food-row";
    foodRow.innerHTML = `<span class="food-name">${food.name}</span>
					<strong class="food-price">${
            Number(food.price.slice(0, food.price.indexOf(" "))) * food.count
          } ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">${food.count}</span>
						<button class="counter-button">+</button>
					</div>`;
    modalBody.append(foodRow);
  });
  const counterBtn = document.querySelectorAll(".counter-button");
  counterBtn.forEach(
    (btn) =>
      (btn.onclick = (event) => {
        const foodName = event.target
          .closest(".food-row")
          .querySelector(".food-name").innerText;
        console.log(foodName);

        if (btn.innerText == "-") {
          for (let i = 0; i < cartList.length; i++) {
            const food = cartList[i];
            if (food.name !== foodName) continue;
            console.log(food);

            food.count -= 1;
            if (food.count < 1) cartList.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(cartList));
            createCartBody();
            console.log(cartList);
            return;
          }
        }
        if (btn.innerText == "+") {
          for (let i = 0; i < cartList.length; i++) {
            const food = cartList[i];
            if (food.name !== foodName) continue;

            food.count += 1;
            localStorage.setItem("cart", JSON.stringify(cartList));
            createCartBody();
            return;
          }
        }
      })
  );
  const clearBtn = document.querySelector(".clear-cart");
  clearBtn.onclick = () => {
    cartList = [];
    localStorage.setItem("cart", JSON.stringify(cartList));
    createCartBody();
  };

  const submitBtn = document
    .querySelector(".footer-buttons")
    .querySelector(".button-primary");

  console.log(111);
  submitBtn.onclick = () => {
    const order = {
      fullPrice: finalPrice.textContent,
      order: cartList,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setTimeout(() => {
      cartList = [];
      localStorage.setItem("cart", JSON.stringify(cartList));
      createCartBody();
    }, 1000);
  };

  let count = 0;
  for (let i = 0; i < cartList.length; i++) {
    const food = cartList[i];
    count += Number(food.price.slice(0, food.price.indexOf(" "))) * food.count;
  }
  finalPrice.textContent = `${count} ₽`;
  return;
};
