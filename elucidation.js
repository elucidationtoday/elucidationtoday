function readmore(seq) {
  console.log("Hello");
  var read_more = document.getElementById("read_more_"+seq);
  var rest_content = document.getElementById("rest_content_"+seq);


  if ($("#rest_content_"+seq).css("display") === "none") {
    read_more.innerHTML = " read less";
    rest_content.style.display = "inline";
  } else {
    read_more.innerHTML = " read more...";
    rest_content.style.display = "none";
  }
}


var btn = $('#go-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


function hover(element1, element2) {
  console.log(element2, element1);
  element1.style.opacity = 0;
  element1.style.height = 0;
  element2.style.height = "48px";
}

function unhover(element1, element2) {
  element1.style.height = "48px";
  element2.style.height = 0;
  element1.style.opacity = 1;
}