'use-strict'

// получаем элемент квадрата из дом.

const square1 = document.querySelector('.square1');


// устанавливаем начальные размеры квадрата

square1.style.width = '600px';
square1.style.height = '600px';

// начальные координаты квадрата

square1.style.top = '-100px';
square1.style.left = '-100px';

// интервал движения квадрата

const interval =  setInterval(moveSquare, 100);

// функция для перемещения квадрата

function moveSquare() {
    // текущиеразмеры и координаты
let width = parseInt(square1.style.width);
let height = parseInt(square1.style.height);
let top = parseInt(square1.style.top);
let left = parseInt(square1.style.left);

// проверяем достиг ли минимального размера

if (width <= 10 & height <= 10) {
    // останавливаем интервал и устанавиваем координаты

    clearInterval(interval);
    square1.style.top = '100px';
    square1.style.left = '100px';
} else {

    // уменьшаем размеры квадрата на каждом шаге

    width = width - 10;
    height = height - 10;

    // перемещаем квадрат вправо и вниз на каждом шаге
    
    


