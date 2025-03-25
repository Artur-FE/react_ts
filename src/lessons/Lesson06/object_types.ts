/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

let city: any = 'Berlin';
city = ['Paris', 1234];

//---Типизация объекта через interface

interface User {
    name: string,
    age?: number | string
}

const userData: User = {
    name:'Tom',
    age: 20
}

interface User {
    isAdmin?: boolean
}

//наследование interface

interface Admin extends User {
    email: string,
    tel: string
}

const personData: Admin = {
    email: "as@admin.com",
    tel: "9383883",
    name: "Bob"
}

const newUser: User = {
    name: "John"
}

//---Типизация через type
//использование type для создания усложненного типа

type Weight = string|number|null;
let userWeight: Weight = 52;
let animalWeight: Weight = null;

//пример использования union + type для ограничения переменной по значениям

type Status = 'success' | 'error' | 'loading';
let requestStatus: Status = 'error';
requestStatus = 'loading'

//использование type для типизации объекта

type Animal = {
    name: string,
    weight?: number
};

const animalData: Animal = {
    name:'Lion',
    weight: 200
}

//Объединение типов
type NewAnimal = Animal & {country: string};
const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Africa'
}

const dog: Animal = {
    name: "Dog"
    // country: "Germany"
}

//GenericType - дженерик это переменная, в которую мы можем подставить нужный тип в момент использования 
//данного type (interface)

type CustomArrayType<T=null> = (string | T)[];

const arrayMix1: CustomArrayType<number> = ['red', 123, 'blue'];
const arrayMix2: CustomArrayType<number[]> = ['apple', [1,4,5], 'orange'];
const arrayMix3: CustomArrayType = ['zebra', null];

//Generic&Interface
interface Fruit <T=number> {
    title: string,
    address: T
}

const fruitObj: Fruit<string> = {
    title: 'Grape',
    address: '123'
}

//--- Числовое перечисление
enum Colors {Red, Black, Green};

// --- Строковое перечисление
// enum для цветов светофора

export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
}

//Пример экспорта именованного экспорта

export const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
        case TRAFFIC_LIGHT.RED:
            return 'Стоп!'
        case TRAFFIC_LIGHT.YELLOW:
            return 'Внимание'
        case TRAFFIC_LIGHT.GREEN:
            return 'Можно идти'
    }
}
