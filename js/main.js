'use-strict'

// cоздаем элемент квадрата и добавляем на страницу
const square1 = document.createElement('div');
square1.style.width = '500px';
square1.style.height = '500px';
document.body.appendChild(square1);

// начальные координаты квадрата

square1.style.position = 'absolute';
square1.style.top = '0px';
square1.style.left = '0px';

// интервал движения квадрата

let interval =  setInterval(moveSquare1(), 100);

// функция для перемещения квадрата

function moveSquare1() {

    // текущие размеры и координаты

let width = parseInt(square1.style.width);
let height = parseInt(square1.style.height);
let top = parseInt(square1.style.top);
let left = parseInt(square1.style.left);

// проверяем достиг ли минимального размера

if (width <= 10 || height <= 10) {
    // останавливаем интервал и устанавиваем координаты

    clearInterval(interval);
    square1.style.top = '100px';
    square1.style.left = '100px';
} else {

    // уменьшаем размеры квадрата на каждом шаге
    width = width - 10;
    height = height - 10;

    // перемещаем квадрат вправо и вниз на каждом шаге
    top = top + 10;
    left = left + 10;

// устанавливаем новые размеры и координаты

square1.style.width = width + 'px';
square1.style.height = height + 'px';
square1.style.top = top + 'px';
square1.style.left = left + 'px';

}

}

moveSquare1();


