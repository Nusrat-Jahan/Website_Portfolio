// sticky navigation menu

let nav = document.querySelector("nav");
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
$(".modal-backdrop").remove();

// $(document).ready(function () {
//   $('.submit').click(function (event) {
//     event.preventDefault()
//     console.log('button clicked')

//     var email = $('.email').val()
//     if (email.length > 5 && email.includes('.') && email.includes('@')) {
//       alert('Email is valid')
//     }
//     else {
//       alert('Email is not valid')
//     }
//   })
// })