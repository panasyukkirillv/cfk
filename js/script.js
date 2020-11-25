$(document).ready(function () {

    $('.header .btn').click(function () {
        $('.header .btn').toggleClass('active');
        $('.header .nav').toggleClass('active');
    });

    var validationFilter = function() {
        var fieldValidation = function() {
           if ($('.required').length === 0) {
              return true;
           }
           var resultValue = true;
           $('.required').each(function () {
              if ($(this).attr('type') === 'text' && $(this).val().length == 0) {
                 $(this).addClass("error");
                 resultValue = false;
              } else if ($(this).attr('type') === 'checkbox' && $(this).prop("checked") === false) {
                 $(this).parent().addClass("error");
                 resultValue = false;
              }
           });
           var phoneV = $('.phone').val();
           if ( !/^[\d]+[\d\(\)\ -]+[\d]+$/.test(phoneV)) {
              resultValue = false;
           }
       var creditV = parseInt($('.sum_credit').val());
           if ( (!creditV) || (creditV < 250000)) {
          $('.sum_credit').addClass("error");
              resultValue = false;
           }
           return resultValue;
  
        };
        $('.credit-request form .button').on('click', function() {
           fieldValidation();
           if (fieldValidation() && !$('.phone').hasClass('error')) {
              if ($('select[name="D1"]').val() === 'Плачу все вовремя' && $('select[name="D2"]').val() === 'Москва или Московская область') {
                 $('.credit-request form').attr('action', '../php/choice_first.php')
              } else {
                 $('.credit-request form').attr('action', '../php/choice_second.php')
              }
              $('.credit-request form').submit()
           }
           else {
              return false;
           }
        });
        $('.phone').on('keyup',function(){
           var phoneV = $(this).val();
           if (phoneV.length > 2) {
              if ( !/^[\d]+[\d\(\)\ -]+[\d]+$/.test(phoneV)) {
                 $(this).addClass('error');
              }
              else {
                 $(this).removeClass('error');  
              }
           }
        });
  
        $('input[type="text"]:not(.phone)').on('keydown', function () {
           if ($(this).val().length > 0) {
              $(this).removeClass("error")
           }
        }); 
        $('input[type="text"]:not(.phone)').on('focus', function () {
           if ($(this).val().length > 0) {
              $(this).removeClass("error")
           }
        }); 
        $('input[type="text"]:not(.phone)').on('click', function () {
           if ($(this).val().length > 0) {
              $(this).removeClass("error")
           }
        }); 
        $('body').on('click','label', function () {
           if ($(this).find('input').prop('checked') === true) {
              $(this).removeClass('error')
           }
        }); 
  
     };
     $(document).ready(function(){
        validationFilter()
     });

});