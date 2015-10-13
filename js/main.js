$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-105});
    return false;
});


$('.portfolio__gallery').tabs();


//  Slider

$('.reply').slick({
    arrows: false,
    autoplay: true,
    dots: true,
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
        hintContent: 'ООО ДенталВей'
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