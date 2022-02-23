// document object model
// объектная модель которая представляет все содержимое страницы в виде объектов,
// которые можно меня с помощью JS

// Вся верстка превращаеться в объект "document"

// Создание элемента:
// document.createElement('тэг который хотим создать')
// объект.место.append() - помещает элемент в конец указанного места
// объект.место.prepend() - помещает элемент в начало указанного места
// document.textContent('текст') - поместить текст в тэг
// .before - добавляет элемет до элемента
// .after - добавляет элемент после элемента
// .remove - удалить элемент
//

//методы Поиск элементов страницы
// document.querySelector(".text"); - поиск первого по классу
// document.querySelector("#text"); - поиск первого по айди
// классы повторяются - айди уникальны
// document.querySelectorAll('.text') - поиск всех элементов

// document.getElementById() - поиск элемента по айди