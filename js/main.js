

$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset: -110});
    return false;
});


$('.portfolio__gallery').tabs();


$(".image-big a").fancybox({
    'closeBtn' : false
});

$(".btn-modal").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$('.myModal__close').click(function(){
    $.fancybox.close();
});


//  Slider

$('.reply').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply').slick('slickNext');
});


//faq

$('.faq__quest').click(function (event) {
    event.preventDefault();
    var box = $(this).closest('.faq li');
    var icon = box.find('div.faq__quest');
    var body = box.find('div.faq__answer');
    body.slideToggle(300);


    // Toggle icon from up to down
//    icon.toggleClass('plus').toggleClass('minus');
    box.toggleClass('').toggleClass('panel_collapse');
    setTimeout(function () {
        box.resize();
        box.find('[id^=map-]').resize();
    }, 50);
});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [50.3952,30.4792],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([50.3958,30.5079], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [34, 49],
        iconImageOffset: [-3, -49]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}


$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('.video-inner').hide();
        console.log('tab');


    } else {
        console.log('pc');
    }

    $('.btn-send').click(function() {

        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val()
            console.log(name, phone);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone}
            }).done(function(msg) {
                console.log(name, phone);
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox.open('#done');
                setTimeout("$.fancybox.close()", 3000);
            });
        }
    });
});


