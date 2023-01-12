// Сеть фастфудов предлагает несколько видов гамбургеров:
//
//     маленький (5$, 20 калорий)
// большой (10$, 40 калорий)
//
//
// Гамбургер может быть с одним из нескольких видов начинок:
//
//     сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)
//
//
// Можно добавить добавки:
//
//     посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).
//
//
// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
//
//     Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик)
//     и методы для выбора опций и расчета нужных величин.

const HAMBURGER = {
    "bigSize":
        {
            calories: 40,
            price: 10,
        },
    "smallSize":
        {
            calories: 20,
            price: 5,
        }
    ,
    "cheeseFilling":
        {
            calories: 20,
            price: 1,
        },
    "saladFilling":
        {
            calories: 10,
            price: `1,5`,
        },
    "potatoFilling":
        {
            calories: 5,
            price: 2,
        },
    "spiceTopping":
        {
            calories: 5,
            price: 2,
        },
    "mayonnaiseTopping":
        {
            calories: 0,
            price: `1,5`,
        },
};

class Hamburger {
    constructor(size, filling, topping) {
        this.size = size;
        this.filling = filling;
        this.topping = topping;
    }

    getHamburgerIsReady() {
        alert(`You ordering ${this.size} hamburger with ${this.filling} and ${this.topping}. It contains ${this.calories} calories. It cost is ${this.cost}`)
        return this.cost
    }

    setHamburgerIsReady(value) {
        this.cost = value
    }

    getCalorie() {
        return this.calories
    }

    setCalorie(value) {
        this.calories = value
    }

    calculatePrice() {
        // debugger;
        let sum = parseInt(HAMBURGER[this.size].price);
        sum += parseInt(HAMBURGER[this.filling].price);
        if(this.topping) {
            sum += parseInt(HAMBURGER[this.topping].price)
        }
        return sum;
    }

    calculateCalories() {
        let sum = parseInt(HAMBURGER[this.size].calories);
        sum += parseInt(HAMBURGER[this.filling].calories);
        if(this.topping) {
            sum += parseInt(HAMBURGER[this.topping].calories)
        }
        return sum;
    }
}

const burger = new Hamburger("bigSize", "saladFilling", "spiceTopping");

console.log(burger.calculatePrice());
console.log(burger.calculateCalories());
burger.setCalorie(burger.calculateCalories());
burger.getCalorie();
burger.setHamburgerIsReady(burger.calculatePrice());
burger.getHamburgerIsReady();
console.log(burger);