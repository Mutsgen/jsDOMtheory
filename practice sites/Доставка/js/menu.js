"use strict";
(function () {
  const rest = JSON.parse(localStorage.getItem("Rest"));
  const restTitle = JSON.parse(localStorage.getItem("RestTitle"));

  const renderTitle = (title) => {
    const h2 = document.createElement("h2");
    const cardInfo = document.createElement("div");
    const cardRating = document.createElement("div");
    const cardPrice = document.createElement("div");
    const cardCategory = document.createElement("div");

    h2.className = "section-title restaurant-title";
    cardInfo.className = "card-info";
    cardRating.className = "rating";
    cardPrice.className = "price";
    cardCategory.className = "category";

    h2.textContent = title.name;
    cardRating.textContent = title.rating;
    cardPrice.textContent = title.price;
    cardCategory.textContent = title.kitchen;
    cardInfo.append(cardRating, cardPrice, cardCategory);
    document.querySelector(".section-heading").append(h2, cardInfo);
  };

  renderTitle(restTitle);

  const renderItem = (data) => {
    data.forEach((food) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${food.image}" alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${food.name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${food.description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${food.price} ₽</strong>
							</div>
						</div>`;

      document.querySelector(".cards-menu").append(card);
    });

    const buyBtn = document.querySelectorAll(".button-add-cart");
    buyBtn.forEach(
      (Btn) =>
        (Btn.onclick = (event) => {
          if (
            JSON.parse(localStorage.getItem("loginly")) === null ||
            !JSON.parse(localStorage.getItem("loginly")).loginly
          ) {
            return alert("Вы не вошли в аккаунт");
          }
          const cartList = JSON.parse(localStorage.getItem("cart")) || [];

          const foodName = event.target
            .closest(".card")
            .querySelector(".card-title").innerText;
          const foodPrice = event.target
            .closest(".card")
            .querySelector(".card-price-bold").innerText;

          for (let i = 0; i < cartList.length; i++) {
            const element = cartList[i];
            if (element.name === foodName) {
              element.count++;
              localStorage.setItem("cart", JSON.stringify(cartList));
              return;
            }
          }
          cartList.push({ name: foodName, price: foodPrice, count: 1 });
          localStorage.setItem("cart", JSON.stringify(cartList));
        })
    );
  };

  fetch(
    `https://test-48b82-default-rtdb.europe-west1.firebasedatabase.app/db/${rest}`
  )
    .then((response) => response.json())
    .then((json) => {
      renderItem(json);
    });
})();
