$(document).ready(function() {

console.log("hello");

$.extend($.lazyLoadXT, {
    edgeY:  250,
    srcAttr: 'data-src'
  });


$(".main").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                     // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
 });


 $('.one-time').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
  });


  $(".services-prof").click(function (){
    let page_info = $(this).data("info");
    let content_info = $("#"+page_info);
    let default_content = $('.sect2 .default-block .default-content');
    let default_image = $('.sect2 .default-block .default-image');
    let hidden_tab_content = $('.hidden_tab_content');
    let services_block = $('.services-block');
    default_content.addClass('default-content_active')
    default_image.addClass('default-image_active')
    hidden_tab_content.addClass('hidden_tab_content_active')
    content_info.addClass('info-content_active')
    services_block.addClass('services-block_active')
  });

  $(".close-btn").click(function (){
    let default_content = $('.sect2 .default-block .default-content');
    let default_image = $('.sect2 .default-block .default-image');
    let hidden_tab_content = $('.hidden_tab_content');
    let services_block = $('.services-block');
    default_content.removeClass('default-content_active');
    default_image.removeClass('default-image_active');
    hidden_tab_content.removeClass('hidden_tab_content_active');
    $('.info-content').removeClass('info-content_active');
    services_block.removeClass('services-block_active');
  });


  $(".ham").click(function (){
      $('.nav-bar').toggleClass('nav-bar_active');
      $('.onepage-pagination').toggleClass('onepage-pagination_active');
      $('.hidden_nav-bar').toggleClass('hidden_nav-bar_active');
      $('.sociate-block').toggleClass('sociate-block_active');
      $('.info_top-block_desktopNone').toggleClass('info_top-block_desktopNone_active');
 
 
 
    

    });


















});