
$(function(){
  var search_list = $("#user-search-result");

  function appendUsers(user) {
      var html = `
                <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>
              ` 
    search_list.append(html);
    return html;
  } 
  function appendNoUserHTML(){
    var html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザーが見つかりません</p>
              </div>`
  search_list.append(html);
  }
  $(function(){
  $("#user-search-field_text").on('keyup', function(){
    var input = $(this).val();
    
  
  $.ajax({
    type: 'GET',
    url: '/users',
    data: '#user-search-field_text',
    data: { keyword : input}, 
    dataType:'json' 
    
  })
    .done(function(users) {
    $("#user-search-result").empty();
    if (users.length !== 0) {
      users.forEach(function(user){
        appendUsers(user);
      });
    }
    else {
      appendNoUserHTML;
    }
  })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })
  });
  })
})

