$(function(){
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
  })
})