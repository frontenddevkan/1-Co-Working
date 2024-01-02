


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
        square.style.transition = "1s ease";
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
const thirdCoordinates = [[0.9, 17], [7.4, 13],
[7.5, 27.5], [14.2, 12], [14.2, 28],
[0.5, 18], [7, 11],
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
    const fourthCoordinates = [[0.7, 16], [7.5, 18], [7.5, 27], [14, 12], [14, 28],
    [0.6, 17], [7, 11.5],
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
movingCursor.src = 'https://raw.githubusercontent.com/frontenddevkan/Portfolio/f74154027f7ab15a1d2914a5b7402c6653064ae2/img/click.svg';
movingCursor.style.position = 'absolute';
movingCursor.style.width = '70px';
movingCursor.style.height = '80px';
movingCursor.style.transition = "margin 1s ease";

document.body.appendChild(movingCursor);

let marginTop = -68;
let marginLeft = 16;


function animateImage() {
    movingCursor.style.marginTop = marginTop + '%';
    movingCursor.style.marginLeft = marginLeft + '%';
    if (marginTop === -76 && marginLeft === 16) {
        marginTop = -68;
        marginLeft = 17;
    } else {
        marginTop = -76;
        marginLeft = 16;
    }
setTimeout(animateImage, 600);
};

window.onload = animateImage;

let  logoDiv = document.querySelector('.header, [id^="square"]');
logoDiv.addEventListener('click', function delHand() {
    movingCursor.style.opacity = 0;
    isdelHandCalled = true;
    updateSquares(secondCoordinates);
    setTimeout (() => {
        updateSquares(thirdCoordinates);
    }, 1100);

});


// скролл

document.addEventListener('scroll', function() {
    let section = document.querySelectorAll('section');

    section.forEach(function(section) {
        let rect = section.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            scrollSquares();
        }
        if (rect.top <= windowHeight / 3 && rect.bottom >= windowHeight / 3) {
            secondScrollSquares();
        }
    })

})


////////////////////////
/// перемещение дивов по скроллу к секции

//////////////////////////////////////
const scrollCoordinates = [[25, 3], [25, 3], [25, 3], [25, 3], [25, 3],
[25, 3], [25, 3],
[25, 3], [25, 3],];

function scrollSquares() {
    const squares = document.querySelectorAll("[id^='square']");
    for (let i = 0; i < squares.length; i++) {
     const square = squares[i];
     square.style.width = '40px';
     square.style.height ='40px';
              square.style.top = scrollCoordinates[i][0] + '%';
     square.style.left = scrollCoordinates[i][1] + '%';

    }
 };

//////////////////////////////////////
const secondScrollCoordinates = [[26, 4], [26, 35], [26, 66],
[26, 66], [26, 66],
[26, 66], [26, 66],
[26, 66], [26, 66],];

function secondScrollSquares() {
    const squares = document.querySelectorAll("[id^='square']");
    for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.style.width = '29%';
    square.style.height ='15%';
    square.style.top = secondScrollCoordinates[i][0] + '%';
    square.style.left = secondScrollCoordinates[i][1] + '%';

    const imageDiv1 = document.createElement('div');
        imageDiv1.style.display = 'flex';
        imageDiv1.style.flexDirection = 'column';

        const image1 = document.createElement('img');
        image1.src = '../img/light.jpg';
        image1.style.width = '50%';
        image1.style.height = '50%';
        image1.style.backgroundRepeat = 'no-repeat';
        image1.style.backgroundPosition = "center";
        image1.style.backgroundSize = 'contain';
        squares[0].appendChild(imageDiv1);
        imageDiv1.appendChild(image1);
        imageDiv1.style.position = 'relative';
        const description1 = document.createElement('div');


    }
};

