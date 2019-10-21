$(function(){
  function buildHTML(message){

      var img = message.image ? `<img src= ${message.image}>`: "";
      var content = message.content ? `${message.content}` : "";

      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${content}
            </p>
          </div>
          ${img}
        </div>`
    return html;
  }; 

  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    . fail(function(){
      alert('error')
    })
    return false;
  })


  var reloadMessages = function() {
    var last_message_id = $(".message:last").data("message-id");
    

    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      });
    })
    .fail(function() {
      alert('自動更新に失敗しました。')
    });
  };
  
  setInterval(reloadMessages, 5000);
});


