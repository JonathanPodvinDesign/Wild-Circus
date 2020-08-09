$(document).ready(function(){
  
///////////////////////////////////
// FOR MENU RESPONSIVE ////////////
////////////////////////////////////
  
  // MENU TOGGLE
  $('.button').click(function(){
    $('nav').toggleClass('nav--toggle')
  });
  
  // BUTTON BURGER POSITION
  $('.button').click(function(){
    $('.button').toggleClass('button--toggle');
  });
  
  // HEADER SCROLL IN FIXED
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('header').addClass('header-fixed');
    } else if ($(document).scrollTop() < 60){
      $('header').removeClass('header-fixed');
    }
  });
  
  // HEADER BRAND CHANGE SIZE WHEN SCROLLING
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('.header-brand__logo').addClass('header-brand__logo--resize');
    } else if ($(document).scrollTop() < 60){
      $('.header-brand__logo').removeClass('header-brand__logo--resize');
    }
  });
  
  // HEADER BRAND CHANGE PADDING WHEN SCROLLING
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('.header__brand').addClass('header__brand--scrolling');
    } else if ($(document).scrollTop() < 60){
      $('.header__brand').removeClass('header__brand--scrolling');
    }
  });
  
  // MARGIN TOP PERFORMANCES SECTION
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('#performances').addClass('performances--margin-top');
    } else if ($(document).scrollTop() < 60){
      $('#performances').removeClass('performances--margin-top');
    }
  });
  
  // MENU LINK COLOR CHANGE SCROLLING
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('.nav-link').addClass('menu__link-color--scrolling');
    } else if ($(document).scrollTop() < 60){
      $('.nav-link').removeClass('menu__link-color--scrolling');
    }
  });
  
  // BURGER MENU NEW POSITION WHEN SCROLLING
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('.button').addClass('button--position-scrolling');
    } else if ($(document).scrollTop() < 60){
      $('.button').removeClass('button--position-scrolling');
    }
  });
  
  // CHANGE LOGO HEADER IN RED WHEN SCROLLING
  $(document).scroll(function(){
    if ($(document).scrollTop() > 60){
      $('.header-brand__logo').attr('src','https://zupimages.net/up/20/11/8sdc.png');
    } else if ($(document).scrollTop() < 60){
      $('.header-brand__logo').attr('src', 'https://zupimages.net/up/20/11/vteu.png');
    }
  });
  
////////////////////////
// END /////////////////
////////////////////////
  
});