// мобильная версия. отключаем создание дивов



// создание и анимация руки


window.onload = function () {
    setTimeout (function() {
        updateSquares(secondCoordinates);
        setTimeout (() => {
         updateSquares(thirdCoordinates);
        }, 2000);
}, 3000);
}


/////////////////////////////////////////////


///squares

const coordinates = [[0.2, 13], [0.7, 13], [1.2, 13], [1.7, 13],
[0.9, 14],
[0.5, 15], [1.4, 15],
[0.2, 15.9], [1.7, 15.9],
];


//////////////////////////////////////////////////////////
const secondCoordinates = [[0.6, 13], [0.6, 17], [0.6, 21], [0.6, 25], [0.6, 29],
[0.6, 33], [0.6, 37], [0.6, 41], [0.6, 45],];



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
        square.style.transition = "2s ease";
        document.body.appendChild(square);
            }

    };

    createSquares();
///////////////////

function updateSquares(secondCoordinates) {
    const squares = document.querySelectorAll("[id^='square']");
        for (let i = 0; i < squares.length; i++) {
            const square = squares[i];
            square.style.width = '20px';
            square.style.height = '20px';
            square.style.top = secondCoordinates[i][0] + '%';
            square.style.left = secondCoordinates[i][1] + '%';
        }
}
///////////////////
const thirdCoordinates = [[0.9, 16], [6.5, 13],
[6.9, 27.5], [14.2, 12], [14.2, 28],
[0.5, 17], [7, 11],
[14.8, 14], [14.8, 30],];


function updateSquares(thirdCoordinates) {
       const squares = document.querySelectorAll("[id^='square']");
       for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        square.style.width = '40px';
        square.style.height ='40px';
        square.style.top = thirdCoordinates[i][0] + '%';
        square.style.left = thirdCoordinates[i][1] + '%';
       }
    };

    //////////////////////////////////////



      
    