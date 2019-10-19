
//$(document).on('turbolinks', function(){
  $(function(){
      $('#user-search-field_text').on('keyup', function(){
        var input = $(this).val();
        console.log("1");
      })
    })
  //})

//   $.ajax({
//     type: 'GET',
//     url: '/products/search',
//     data: { keyword: input },
//     dataType: 'json'
//   })


//     done(function(users) {
//     $(".listview.js-lazy-load-images").empty();
//     if (users.length !== 0) {
//       users.forEach(function(user){
//         appendProduct(user);
//       });
//     }
//     else {
//       appendErrMsgToHTML("");
//     )}
//   )}
// )}