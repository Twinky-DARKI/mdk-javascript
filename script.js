// Задание 1
let price = prompt("Введите стоимость товара:")
let money = prompt("Введите количество денег:")

price = parseFloat(price)
money = parseFloat(money)

if (isNaN(price) || isNaN(money) || price < 0 || money < 0) {
  alert("Неверный формат ввода")
} else if (price === money) {
  alert("Покупка совершена")
} else if (price > money) {
  alert(`Для покупки не хватает ${price - money} р.`)
} else {
  alert(`Покупка совершена. Сдача ${money - price} р.`)
}

// Задание 2
let num = parseFloat(prompt("Введите число:"))

if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else {
  alert(0)
}

// Задание 3
let a = +prompt("Введите первое число:")
let b = +prompt("Введите второе число:")

alert(a + b < 4 ? "Мало" : "Много")

// Задание 4
let login = prompt("Введите логин:")

alert(login === "Сотрудник" ? "Привет" : login === "Директор" ? "Здравствуйте" : login === "" ? "Нет логина" : "Неизвестный логин")

// Задание 5
let login5 = prompt("Кто там?")

if (login5 === "Админ") {
  let password = prompt("Пароль?")

  if (password === "Я главный") {
    alert("Здравствуйте!")
  } else if (password === null || password === "") {
    alert("Отменено")
  } else {
    alert("Неверный пароль")
  }
} else if (login5 === null || login5 === "") {
  alert("Отменено")
} else {
  alert("Я вас не знаю")
}
