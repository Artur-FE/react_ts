//Деструктуризация
//Массивы

const fruits = ['apple', 'grape'];

const arr = [... fruits, 'cherry'];

console.log(arr);
console.log(fruits);

//Объекты

const bookObj = {
    bookName: 'Great Gatsby',
    price: 20,
};

// Создать новый объект и добавить в него новое свойство

const newBookObj = {...bookObj, author:'Fit'};
console.log(newBookObj);

// Деструктурирующее присваивание
//Массивы

const colors = ['red', 'black'];
// const color1 = colors[0];
// const color2 = colors[1];

const [color1, color2] = colors;
console.log(color1);
console.log(color2);

//Объекты

const animal = {
    title: 'Dog',
    weight: 20
}

// const title = animal.title;

const {title, weight: animalWeight} = animal;


