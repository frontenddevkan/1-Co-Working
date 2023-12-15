'use strict';





///squares

const coordinates = [[0.2, 13], [0.7, 13], [1.2, 13], [1.7, 13],
[0.9, 14],
[0.5, 15], [1.4, 15],
[0.2, 15.9], [1.7, 15.9],
];


function createSquares(square) {
    for (let i = 0; i < coordinates.length; i++) {
        const square = document.createElement("div");

        // генерация уникального id

        const squareId = `square${i + 1}`;
        square.setAttribute("id", squareId);

        square.style.width = '15px';
        square.style.height = '15px';
        square.style.border = '1px solid #C778DD';
        square.style.display = 'inline-block';
        square.style.position = 'absolute';
        square.style.top = `${coordinates[i][0]}%`;
        square.style.left = `${coordinates[i][1]}%`;
        document.body.appendChild(square);

    }



};

createSquares();
////////////////////////////////////////////////////////////////////////////////////

// movingSquares();

function movingSquares(square) {
    

    }

};





//////////////////////////////////////////////////////
const movingCursor = new Image();
movingCursor.src = '../img/click.svg';
movingCursor.style.position = 'absolute';
movingCursor.style.width = '80px';
movingCursor.style.height = '90px';
movingCursor.style.transition = "margin 0.5s ease";
// movingCursor.style.marginTop = '-75%';
// movingCursor.style.marginLeft = '16%';

// movingCursor.style.marginTop = '-82%';
// movingCursor.style.marginLeft = '14%';
document.body.appendChild(movingCursor);

let marginTop = -75;
let marginLeft = 16;

function animateImage() {
    movingCursor.style.marginTop = marginTop + '%';
    movingCursor.style.marginLeft = marginLeft + '%';
    if (marginTop === -80 && marginLeft === 14) {
        marginTop = -75;
        marginLeft = 16;
    } else {
        marginTop = -80;
        marginLeft = 14;
    }
setTimeout(animateImage, 300);
}

window.onload = animateImage;

let  logoDiv = document.querySelector('.header');
logoDiv.addEventListener('click', function() {
    movingCursor.style.opacity = 0;
    movingSquares();
});





