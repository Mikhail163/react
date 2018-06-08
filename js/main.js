"use strict";

/**
 *
 * 
1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции.
2. Написать функцию calculateArea, которая будет принимать параметры для вычисления площади (можете выбрать конкретную фигуру или, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название фигуры, для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление.
3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению и добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
У класса Employee должны присутствовать параметры: salary (число), department (строка).
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(). Это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human.

4. *При помощи генератора написать функцию-анкету, которая запрашивает у пользователя на ввод параметры и передает их в генератор. В конце, когда генератор завершается, он должен вернуть все введенные входные параметры в виде объекта. Этот объект нужно вывести в консоли.
5. *Написать цикл, который создает массив промисов. Внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10. В итоге должно получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
 *
 */

/**
 * 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции.
 * 
 * Метод можно прменить при отслеживание изменений на сервере,
 * например посылаем 10 синхронных ajax запросов на сервер и анализируем ответ
 * либо например функция callback поворачивает фигуру на 1 градус - а нам нужно повернуть фигуру на 10 градусов,
 * и чтоб это визуализировалось - мы вызываем 10 раз метод callback и видим как фигура поворачивается
 * 
 * 
 * @param   {integer} times = 0       сколько раз выполнять callback
 * @param   {function} callback = null метод, который нужно выполнить times раз
 * @returns {integer} 0 - все плохо, 1 - все ок
 */
function loop(times = 0, callback = null) {

    if (!isNumeric(times) || !callback) {
        return 0;
    }

    for (let i = 0, i < times; i++) {
        try {
            callback();
        } catch (e) {
            console.log(e);
        }
    }

    return 1;
}


/**
 * 2. Написать функцию calculateArea, которая будет принимать параметры для вычисления площади (можете выбрать конкретную фигуру или, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название фигуры, для которой вычислялась площадь, input – входные параметры, по которым было произведено вычисление.
 * @param   {string} id идентификатор элемента, площадь которого вычисляем
 * @returns {object}   возвращаем объект { площадь фигуры, название фигуры, входные параметры }
 */
function calculateArea(id) {

    let figure = 'rectangle';
    let input = id;

    let element = document.getElementById(id);

    let cord = element.getBoundingClientRect();

    let area = (cord.bottom - cord.top) * (cord.right - cord.left);

    return {
        area,
        figure,
        input
    };
}

/**
 *
 * 3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению и добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется в виду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата).
У класса Employee должны присутствовать параметры: salary (число), department (строка).
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализован такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(). Это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human.
 *
 */

class Human {

    constructor(name, age, birthday) {
        this._name = name;
        this._age = age;
        this._dateOfBirth = birthday;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
        console.log(this.dateOfBirth);
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

}

class Employee extends Human {

    constructor(name, age, birthday) {
        super(name, age, birthday);

        this._salary = 0;
        this._department = '';

    }

    displayInfo() {
        super.displayInfo();
        console.log(this.salary);
        console.log(this.department);

    }

    get salary() {
        return this._salary;
    }

    set salary(newSalary) {
        this._salary = newSalary;
    }

    get department() {
        return this._department;
    }

    set department(newDepartment) {
        this._department = newDepartment;
    }

}

class Developer extends Employee {

    constructor(name, age, birthday) {
        super(name, age, birthday);
        this._manager = null;
    }

    get manager() {
        return this._manager;
    }

    set manager(newManager) {

        if (newManager != this._manager) {

            if (this._manager) {
                // если у рабочего есть manager
                // то у старого manager, удаляем этого сотрудника
                this._manager.deleteDeveloper(this);
            }

            // добавляем нового девелопера менеджеру
            this._manager = newManager;

            if (newManager) {
                his._manager.developer(this);
            }
        }

    }
}

class Manager extends Employee {

    constructor(name, age, birthday) {
        super(name, age, birthday);

        this._developers = [];

    }

    set developer(newDeveloper) {
        if (this._developers.indexOf(newDeveloper) === -1) {
            this._developers.push(newDeveloper);

            newDeveloper.manager(this);
        }
    }

    get developers() {
        return this._developers;
    }

    deleteDeveloper(developer) {

        let index = this._developers.indexOf(developer);

        if (index != -1) {
            // Удаляем нашего сотрудника
            this._developers.splice(index, 1);

            // Теперь горемыка остался без менеджера((
            developer.manager(null);
        }
    }

}
