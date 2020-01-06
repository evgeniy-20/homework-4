//1.Создать две функции и дать им осмысленные названия:
//- первая функция принимает массив и колбэк (одна для всех вызовов)
//- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
 
//Первая функция возвращает строку “New value: ” и результат обработки:
 
//firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
//firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
//firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
//“New value: Jhon is 45, Aaron is 20,”
//firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
 
 
//Подсказка: secondFunc должна быть представлена функцией, которая принимает
//один аргумент (каждый элемент массива) и возвращает результат его обработки
 
function changeString(arr, getNewString) {
    let newString = 'New value:';
    for (let i = 0; i < arr.length; i++) {
        newString += getNewString(arr[i]);
    }
    return console.log(newString);
}
function stickCamelCaseString(item) {
    return ' ' + item[0].toUpperCase() + item.slice(1);
}
function increaseTen(item) {
    return ' ' + (item *= 10) + ',';
}
function objectToString(item) {
    return ' ' + item.name + ' is ' + item.age + ',';
}
function invertString(item) {
    let newItem = '';
    for (let i = item.length - 1; i >= 0; i--) {
        newItem += item[i];
    }
    return ' ' + newItem + ',';
}
changeString(['my', 'name', 'is', 'Trinity'], stickCamelCaseString);
changeString([10, 20, 30], increaseTen);
changeString([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], objectToString);
changeString(['abc', '123'], invertString);
//2. На основе массива map и массива users собрать новый массив объектов где в каждом объекте будут только те свойства которые перечислены в массиве map
//const map = ["_id", "name", "isActive", "balance"]; const users = [ { "_id": "5d220b10e8265cc978e2586b", "isActive": true, "balance": 2853.33, "age": 20, "name": "Buckner Osborne", "gender": "male", "company": "EMPIRICA", "email": "bucknerosborne@empirica.com", "phone": "+1 (850) 411-2997", "registered": "2018-08-13T04:28:45 -03:00" }, { "_id": "5d220b10144ef972f6c2b332", "isActive": true, "balance": 1464.63, "age": 38, "name": "Rosalie Smith", "gender": "female", "company": "KATAKANA", "email": "rosaliesmith@katakana.com", "phone": "+1 (943) 463-2496", "registered": "2016-12-09T05:15:34 -02:00" }, { "_id": "5d220b1083a0494655cdecf6", "isActive": false, "balance": 2823.39, "age": 40, "name": "Estrada Davenport", "gender": "male", "company": "EBIDCO", "email": "estradadavenport@ebidco.com", "phone": "+1 (890) 461-2088", "registered": "2016-03-04T03:36:38 -02:00" } ];
//На выходе мы должны получить массив вида:
//<code>[ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];
//</code>
const map = ["_id", "name", "isActive", "balance"];
const users = [ { "_id": "5d220b10e8265cc978e2586b", "isActive": true, "balance": 2853.33, "age": 20, "name": "Buckner Osborne", "gender": "male", "company": "EMPIRICA", "email": "bucknerosborne@empirica.com", "phone": "+1 (850) 411-2997", "registered": "2018-08-13T04:28:45 -03:00" }, { "_id": "5d220b10144ef972f6c2b332", "isActive": true, "balance": 1464.63, "age": 38, "name": "Rosalie Smith", "gender": "female", "company": "KATAKANA", "email": "rosaliesmith@katakana.com", "phone": "+1 (943) 463-2496", "registered": "2016-12-09T05:15:34 -02:00" }, { "_id": "5d220b1083a0494655cdecf6", "isActive": false, "balance": 2823.39, "age": 40, "name": "Estrada Davenport", "gender": "male", "company": "EBIDCO", "email": "estradadavenport@ebidco.com", "phone": "+1 (890) 461-2088", "registered": "2016-03-04T03:36:38 -02:00" } ];


//3. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
//[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
//Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
//<code>// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"
//</code>
arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];
arr.sort(function (a, b) {
    if (a.index > b.index) {
        return 1;
    }
    if (a.index < b.index) {
        return -1;
    }
    return 0;
});
let builString = arr.reduce(function (res, current) {
    return res.concat(current.char);
}, '');
//4. Проверить как изменится объект obj и найти объяснение
const obj = {};
(function(x) { x.b = 1; x = null; })(obj);
//5. Создать объект, у которого будет цена товара и его скидка, а также
//два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
		return this.price;
	},
	getPriceWithDiscount: function () {  
		return this.price - this.price * parseInt(this.discount) / 100;
	}
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
//6. Даны объект и функция:
//let sizes = { width: 5, height: 10 }, getSquare = function () { return this.width * this.height };
//Не изменяя функцию или объект, получить результат функции
//getSquare для объекта sizes
let sizes = { 
    width: 5, 
    height: 10 
}
getSquare = function () { return this.width * this.height };
const square = getSquare.apply(sizes);
