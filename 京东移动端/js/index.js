$.ajax({
    url:"./js/index.json",
    type:"get",
    data:{},
    dataType:"json"
}).success(function (str) {
  $.each(str,function (i) {
      var data=str[i].resule
      console.log(data)
      $.each(data,function (inde) {
          console.log(inde)
          $(`
                 <li>
                            <div class="floor_ul_top">
                                <a class="floot_it_a">
                                    <img src="${data[inde].img}">
                                </a>
                            </div>
                            <div class="floor_ul_bottom">
                                    <span class="floor_span">
                                        <em>¥</em>
                                        <span class="jiaqian">${data[inde].qian}</span>
                                    </span>
                                <span class="floor_span2">
                                         <em>¥</em>
                                        <span class="jiaqian">${data[inde].jiu}</span>
                                        <hr>
                                    </span>
                            </div>
                        </li>
          `).appendTo(".floor_ul")
      })
  })  
})