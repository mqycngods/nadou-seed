$(".ajax-demo-get").click(function(){
    $.get("/ajax/getList", {
     id:11
    }).then(function(res) {
      if(res.code == 200){
        console.log(res);
      }
    })
  // $.ajax({
  //   url: '/ajax/getList',
  //   type: 'post',
  //   data: {
  //     id:111
  //   },
  //   dataType: 'json'
  // }).then(function(res) {
  //   if (res.code == 200) {
  //     console.log(res)
  //   }
  // });
});


$(".ajax-demo-post").click(function(){
    $.post("/ajax/SavePage", {
      id:22
    }).then(function(res) {
      if(res.code == 200){
        console.log(res);
      }
    })
});
