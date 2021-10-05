$('.button').on('click', function () {
    $('.block').find('.button').toggleClass('button-left');
    $('.span').fadeToggle();
})



// переменные 



// var a = 5;
// var b = 4;
// var c = a + b;
// console.log(typeof a);
// console.log(c);
// var str = 'Привет'
// console.log(typeof str);
// var str2 = ' Максим';
// var str3 = str + str2;
// console.log(str3);




// mouseenter mouseleave scrollTop





// function bodyRed() {
//     $('body').css('background', 'red');
// }

// function bodyWhite() {
//     $('body').css('background', 'white');
// }
// $('button').on('mouseenter', bodyRed);
// $('button').on('mouseleave', bodyWhite);
// $(window).on('scroll', function () {
//     console.log($(window).scrollTop());
//     if ($(window).scrollTop() > 300) {
//         bodyRed();
//     } else {
//         bodyWhite();
//     }
// });
// $('a').on('click', function (event) {
//     console.log(event);
//     event.preventDefault();
// });


// Добавление удаление класов
// Добавление класа 
// $('.block').addClass('red');
// Удаление класа 
// $('.block').removeClass('red'); 
// задержка
// setTimeout(function () {
//     $('.block').removeClass('red');

// }, 3000);