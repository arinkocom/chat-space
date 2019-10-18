$(function(){
  function buildHTML(messages){
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
          ${message.content}
        </p>
      </div>
      <img src=${message.image} >
    </div>`;
  return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }

  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action')
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
      $('.form__message').val('');
      $('.form__submit').prop('disabled,false');
      scroll()
    })
    . fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);

    })
  })
})