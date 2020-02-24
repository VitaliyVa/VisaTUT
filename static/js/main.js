$(document).ready(function() {

console.log("hello");








if (window.matchMedia("(max-width: 996px)").matches) {
  $('.hidden_name').addClass('hidden_mob');
      var hidden_name = $('.hidden_name a');
    for (var testz = 1; testz <= hidden_name.length; ++testz) {
      var tehas = hidden_name[testz];
     
      add_number = 1 + testz;
      var dinamic_id = '#sect' + add_number;
      console.log('dinamic_id: ', dinamic_id);
      $(tehas).attr('href', dinamic_id);
    }

}




$('.one-time').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true
});



var doFullpage = document.documentElement.clientWidth;
if (doFullpage > 996) {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
      // scrollOverflow: true,
    navigation: true,
    normalScrollElements: '.normalScroll',
    slidesNavigation: true,
    anchors: ['firstPage', 'secondPage', '3thPage', '4thpage', '5thpage', '6thpage', '7thpage'],
  
  });
}


$.extend($.lazyLoadXT, {
    edgeY:  250,
    srcAttr: 'data-src'
  });


  // if (window.matchMedia("(min-width: 996px)").matches) {
  
  // } else {
  //   $('.hidden_name').addClass('scroll_all');
  // }

 




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

  function removeModalServices() {
    let default_content = $('.sect2 .default-block .default-content');
    let default_image = $('.sect2 .default-block .default-image');
    let hidden_tab_content = $('.hidden_tab_content');
    let services_block = $('.services-block');
    default_content.removeClass('default-content_active');
    default_image.removeClass('default-image_active');
    hidden_tab_content.removeClass('hidden_tab_content_active');
    $('.info-content').removeClass('info-content_active');
    services_block.removeClass('services-block_active');
  }

  $(".ham").click(function (){
      $('.nav-bar').toggleClass('nav-bar_active');
      $('.onepage-pagination').toggleClass('onepage-pagination_active');
      $('.hidden_nav-bar').toggleClass('hidden_nav-bar_active');
      $('.sociate-block').toggleClass('sociate-block_active');
      $('.info_top-block_desktopNone').toggleClass('info_top-block_desktopNone_active');
      $('.main_nav_bar_for_mobile').toggleClass('main_nav_bar_for_mobile_active');
 
      if ($(this).hasClass('active')) {
        $("html,body").css("overflow", "hidden");
      } else {
          $("html,body").css("overflow", "visible");
    
      }
 
    

    });

    $(".hidden_name").click(function (){
      $('.nav-bar').removeClass('nav-bar_active');
      $('.onepage-pagination').removeClass('onepage-pagination_active');
      $('.hidden_nav-bar').removeClass('hidden_nav-bar_active');
      $('.sociate-block').removeClass('sociate-block_active');
      $('.info_top-block_desktopNone').removeClass('info_top-block_desktopNone_active');
      $('.main_nav_bar_for_mobile').removeClass('main_nav_bar_for_mobile_active');
      $('.ham').removeClass('active');

      if (window.matchMedia("(max-width: 996px)").matches) {
        if ($('.hidden_mob').hasClass('active')) {
          $("html,body").css("overflow", "hidden");
        } else {
            $("html,body").css("overflow", "visible");
      
        }
      }
 
    });
    

    $(".nav_name").click(function (){
      let page_info = $(this).data("nav");
      console.log('page_info: ', page_info);
     
        if (page_info == "nav1") {
            removeModalServices();
        }
    });



    $(".scroll_all").on('click', function () {
      event.preventDefault();

      var elementClick = $(this).attr("href");
      // console.log(elementClick);
    
      var destination = $(elementClick).offset().top;
      var destContacts = (destination - 600)
      $('html, body').animate({ scrollTop: destination }, 600);
      console.log(destContacts);
      return false;
      

  });




  $('.select__input').on('click', function(){
   
    let fieldt = $(this).parents('.select').find(".select__wrap");
    $('.select__wrap').removeClass('select__wrap_active');
    //   $('.field').removeClass('field-active');
    $('.field__icon').removeClass('field__icon_active');
    
    fieldt.toggleClass('select__wrap_active');
    $('.field__icon', this).toggleClass('field__icon_active');


    if ($(this).hasClass('select__input_active')) {
        
        $('.select__wrap').removeClass('select__wrap_active');
        $('.field__icon').removeClass('field__icon_active');
          $(this).removeClass('select__input_active');
    } else {
        $('.select__input').removeClass('select__input_active');
        $(this).addClass('select__input_active');
    }


   
});

$(document).mouseup(function(e) {
    var select = $(e.target).parents('.select'); // тут указываем класс элемента
   
    if (select.length > 0) {} else {
        $('.select__wrap').removeClass('select__wrap_active');
        //   $('.field').removeClass('field-active');
        $('.field__icon').removeClass('field__icon_active');
        $('.select__input').removeClass('select__input_active');
       
    }
    });




$('.select__wrap_item').on('click', function() {
    var text = $(this).text();
    var id = $(this).data('id');
    
    let field = $(this).parents('.select__wrap').parents('.select').find(".field_text");
    let input_select = $(this).parents('.select').find("input");
    $(field).text(text);
    $(input_select).val(id);
    
    field.attr('data-countries', id)
   
    let engineType = $(this).parents('.select__wrap').parents('.select').find(".field_text");
    engineType.attr('data-engineType', id);

    let engineYear = $(this).parents('.select__wrap').parents('.select').find(".field_text");
    engineYear.attr('data-year', id)
    
    $('.select__wrap').removeClass('select__wrap_active');
    $('.select__input').removeClass('select__input_active');
    $('.field__icon').removeClass('field__icon_active');
    // $('.select__input').removeClass('select__input-active');
    
  })
  












});