$(function(){
  var search_list = $("#user-search-result");
  
  function appendUsers(user) {
      var html = `
                <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>
              ` 
      return html;
  } 
  function appendNoUserHTML(){
    var html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
              </div>`
    $(search_list).append(html);
    return html;
  }
  $("#user-search-field").on('keyup', function(e){
    e.preventDefault();
    var input = $(this).val();    
  $.ajax({
    type: 'GET',
    url: '/users',
    data: { keyword : input}, 
    dataType:'json' 
  })
    .done(function(users) {
    $("#user-search-result").empty();
    if (users.length !== 0 ) {
      users.forEach(function(user){
        var html = appendUsers(user);
        $("#user-search-result").append(html);
      });
    } else {
      appendNoUserHTML();
    }
    if(input.length === 0){
      $("#user-search-result").empty();
    }
  })

    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })    
  });
  function buildHTML(user){
      var html = `
      <div class='chat-group-user'>
          <input name='group[user_ids][]' type='hidden' value='${user.userId}'>  
        <p class='chat-group-user__name'>${user.userName}</p>
        <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
      </div>
      `
      return html;
    }
    $(document).on('click', '.user-search-add', function() {
            var user = $(this).data();
            var html = buildHTML(user);
            $(".chat-group-users").append(html); 
            $(this).parent().remove();
            
     });

     $(document).on('click', '.user-search-remove', function() {
              $(this).parent().remove(); 
     })
})
