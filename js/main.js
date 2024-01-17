// мобильная версия. отключаем создание дивов



// создание и анимация руки


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





// скролл

document.addEventListener('scroll', function() {
        let section = document.querySelectorAll('section');

        section.forEach(function(section) {
            let rect = section.getBoundingClientRect();
            let windowHeight = window.innerHeight;

            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            scrollSquares();
            }
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                setTimeout (function() {
                    secondScrollSquares();
                }, 2000);

            }
        })
    });




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
     square.style.transition = '2s ease';
            square.style.top = scrollCoordinates[i][0] + '%';
     square.style.left = scrollCoordinates[i][1] + '%';

    }
 };

//////////////////////////////////////
const secondScrollCoordinates = [[25, 5], 
[27, 11], 
[29, 17],
[31, 23], 
[27, 11], [27, 11], 
[27, 11],
[27, 11], [27, 11],];

const sliderImages = ['../img/light.jpg', '../img/dark.jpg', '../img/light.jpg', '../img/dark.jpg', '../img/light.jpg', '../img/dark.jpg', '../img/light.jpg', '../img/dark.jpg', '../img/light.jpg', '../img/dark.jpg',];

function secondScrollSquares() {
    const squares = document.querySelectorAll("[id^='square']");
    for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.style.width = '54%';
    square.style.height ='15%';
    square.style.top = secondScrollCoordinates[i][0] + '%';
    square.style.left = secondScrollCoordinates[i][1] + '%';
    square.style.border = '1px solid var(--border-grey)';
        setTimeout (function() {
            let projectsSlider = document.getElementById("[id^='square']");
            let slide = document.createElement('div');
            let slideImg = document.createElement('img');
            let slideText = document.createElement('p');
                for (let i = 0; i < sliderImages.length; i++) {
                slideImg.src = sliderImages[i];
                }
                slideImg.alt = 'Картинка проекта';
                slideImg.style.width = '100%';
                slideImg.style.height = '50%';
                slideImg.style.objectFit = 'cover';
                slideImg.style.objectPosition = 'center';
                
                slide.appendChild(slideImg);
                slide.appendChild(slideText);
                slideText.textContent = 'javascript';
                projectsSlider.appendChild(slide);


            }, 3000);


}
};



