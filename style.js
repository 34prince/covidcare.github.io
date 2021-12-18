$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

    if($(window).scrollTop() > 0){
      $('.scroll-top').show();
    }else{
      $('.scroll-top').hide();
    }

    // scroll spy 

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

// ,hl
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;
    }else{
      clickedLi = e.target.parentElement.parentElement;
    }
   clickedLi.classList.toggle("showAnswer");
  });
}
fetch('https://corona.lmao.ninja/v2/countries/india')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          document.getElementById("country").innerHTML = data.country;
          document.getElementById("active").innerHTML = data.active.toLocaleString();
          document.getElementById("cases").innerHTML = data.cases.toLocaleString();
          document.getElementById("critical").innerHTML = data.critical.toLocaleString();
          document.getElementById("death").innerHTML = data.deaths.toLocaleString();
          document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
          document.getElementById("tests").innerHTML = data.tests.toLocaleString();
          document.getElementById("flag").src = data.countryInfo.flag;
        });


