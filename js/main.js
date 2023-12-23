



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
        square.style.transition = "0.5s ease";
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
const thirdCoordinates = [[0.7, 17], [7.5, 13], [7.5, 27], [14, 12], [14, 28],
[0.6, 16.5], [7, 11.5],
[14.5, 13], [14.5, 29],];


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
    const fourthCoordinates = [[0.7, 17], [7.5, 13], [7.5, 27], [14, 12], [14, 28],
    [0.6, 16.5], [7, 11.5],
    [14.5, 13], [14.5, 29],];

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




const movingCursor = new Image();
movingCursor.src = 'https://raw.githubusercontent.com/frontenddevkan/Portfolio/main/img/cursor.svg';
movingCursor.style.position = 'absolute';
movingCursor.style.width = '80px';
movingCursor.style.height = '90px';
movingCursor.style.transition = "margin 0.5s ease";

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
};

window.onload = animateImage;

let  logoDiv = document.querySelector('.header, [id^="square"]');
logoDiv.addEventListener('click', function delHand() {
    movingCursor.style.opacity = 0;
    isdelHandCalled = true;
    updateSquares(secondCoordinates);
    setTimeout (() => {
        updateSquares(thirdCoordinates);
    }, 1500);


});




