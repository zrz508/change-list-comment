$(document).ready(function () {
  let listEL = $('.js-list');
  // let cleanList = $(newFunction());
  let addCase = $('.comments__form-button');
  let deleteCommentButton = $('.js-comments__delete');
  let text = $('.js-comments__label-textarea');
  let name = $('.comments__name-input');
  let localStorageItems = [];


  (function () {

    if (!localStorage.getItem('toDoList')) {
      // $('cleanList').show();
      localStorage.setItem('toDoList', [{
        name: 'asdasdsa'
      }])
    } else {
      localStorageItems = localStorage.getItem('toDoList');
      console.log(localStorageItems);
      $('cleanList').hide();
    }
  })();

  addCase.on('click', (function (event) {
    event.preventDefault();
    addComment();
  }))


  function validateForm() {
    if (name.val().length < 3) {
      return false
    }
    if (text.val() < 3) {
      return false
    }
    return true
  }

  function addComment() {

    if (validateForm()) {
      addItem(name.val(), text.val())
    }
  }

  function addItemToLocalStoragen(name, text) {

  }

  function addItem(name, text) {
    $('.js-list').append(`
      <li>
          <article>
            <header class="header-article">
              <h2 class="comments__author ">${name}</h2>
              <button type="button" class="comments__delete js-comments__delete">x</button>
              <button type="button" class="slide-down js-slide-down"></button>
            </header>

            <p class="comments__text js-comments__text">
              ${text}
            </p>
          </article>
      </li>
      `)

  }

  // if (name.val() && text.val()) {

  // $('input').removeClass('error');
  // $('textarea').removeClass('error');



  // name = $('input').val('');
  // text = $('textarea').val('');

  // addToStorage();
  // } else {
  // $('input').addClass('error');
  // $('textarea').addClass('error');
  // }


  function deleteComment(item) {
    item.remove();

    let items = $('.comments__item');

    addToStorage();

    if (items.length == 0) {
      $('.comments__none').show();
      localStorage.removeItem('comments');
    }
  }

  // $(addCase).on('click', addCase, addComment);

  // $('body').on('click', deleteComment, function () {
  //   let item = $(this).parents(listEL);

  //   deleteComment(item);
  // })

});




function newFunction() {
  // return '.js-comments__none';
}
// $(document).ready(function () {
//   function initialState() {
//     if (localStorage.getItem("comments") == null) {
//       $(".comments__none").show();
//     } else {
//       $(".comments__none").hide();
//       $(".comments__list").html(localStorage.getItem("comments"));
//     }
//   }

//   initialState();

//   function addToStorage() {
//     let content = $("").html();

//     localStorage.setItem("comments", content);
//   }

//   function addComment() {
//     let name = $("input").val(),
//       text = $("textarea").val(),
//       date = new Date().toLocaleString();

//     if (name.length !== 0 && text.length !== 0) {
//       $("input").removeClass("error");
//       $("textarea").removeClass("error");

//       $(".comments__none").hide();

//       $(".comments__list").append(`

// 				<li class="comments__item">
//           <article>
//             <header class="header-article">
//               <h2 class="comments__author ">${name}</h2>
//               <button type="button" class="comments__delete js-comments__delete">x</button>
//               <button type="button" class="slide-down js-slide-down"></button>
//             </header>

//             <p class="comments__text js-comments__text">
//               ${text}
//             </p>
//           </article>
// 				</li>

//       `);
//       $(".slide-down js-slide-down").on("click", function (event) {
//         event.preventDefault;


//       });

//       name = $("input").val("");
//       text = $("textarea").val("");

//       addToStorage();
//     } else {
//       $("input").addClass("error");
//       $("textarea").addClass("error");
//     }
//   }

//   function deleteComment(item) {
//     item.remove();

//     let items = $(".comments__item");

//     addToStorage();

//     if (items.length == 0) {
//       $(".comments__none").show();
//       localStorage.removeItem("comments");
//     }
//   }

//   $(".comments__add").on("click", addComment);

//   $("body").on("click", ".comments__delete", function (event) {
//     event.preventDefault();

//     let item = $(this).parents(".comments__item");

//     deleteComment(item);
//   });
// });