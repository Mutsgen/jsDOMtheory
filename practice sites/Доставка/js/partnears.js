"use strict";
(function () {
  const renderItem = (data) => {
    data.forEach((restaurant) => {
      const card = document.createElement("a");
      card.className = "card card-restaurant";
      card.setAttribute("href", "restaurant.html");
      card.innerHTML = `<a href="restaurant.html" class="card card-restaurant">
              <img
                src="${restaurant.image}"
                alt="image"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${restaurant.name}</h3>
                  <span class="card-tag tag">${restaurant.time_of_delivery} мин</span>
                </div>
                <div class="card-info">
                  <div class="rating">${restaurant.stars}</div>
                  <div class="price">${restaurant.price} ₽ </div>
                  <div class="category">${restaurant.kitchen}</div>
                </div>
              </div>`;
      card.onclick = () => {
        localStorage.setItem(
          "RestTitle",
          JSON.stringify({
            name: restaurant.name,
            rating: restaurant.stars,
            price: restaurant.price,
            kitchen: restaurant.kitchen,
          })
        );
        localStorage.setItem("Rest", JSON.stringify(`${restaurant.products}`));
      };
      document.querySelector(".cards-restaurants").append(card);
    });
  };
  fetch(
    "https://test-48b82-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json"
  )
    .then((response) => response.json())
    .then((json) => {
      renderItem(json);
    })
    .catch((error) => {
      renderItem([]);
    });
})();
