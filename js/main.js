'use strict';


/// slider for cards







///squares

const coordinates = [[0.2, 13], [0.7, 13], [1.2, 13], [1.7, 13],
[0.9, 14],
[0.5, 15], [1.4, 15],
[0.2, 15.9], [1.7, 15.9],
];

function createSquares(square) {
    for (let i = 0; i < coordinates.length; i++) {
        const square = document.createElement("div");
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


























// setInterval(() => element.hidden = !element.hidden, 2000);

