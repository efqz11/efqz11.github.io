$(function() {
    setTimeout(() => {
        setInterval(changeGreeting, 5000)
    }, 5000);

    $('.milestones .head.click-more').click(function(){
        $(this).parent().find('.more').toggle(200);
        var l = $(this).parent().find('.more').is(':visible') ? "↑" : "↓";
        $(this).find('span').html(l);
        setTimeout(function (){
            $('.line').css('height', $('.list-container.milestones').height() + "px");
        }, 300)
    });

    $('.milestones .click-more').mouseover(function(){
        $(this).find('span').show();
    }).mouseout(function() {
        $(this).find('span').hide();
    });


    $('.line').css('height', $('.list-container.milestones').height() + "px");
    // set container height right after header section
    $('#mainmenu').css('margin-top', $('.box-center').height() + "px");


    $('.scroll-top').click(function (e){
        e.preventDefault();
        $('html,body').scrollTop(0);
    });

    // switch theme
    $('.theme-bar .sw').click(function () {
        $('.theme-bar .sw').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('theme-w'))
            $('body').removeClass('is-dark');
        else
            $('body').addClass('is-dark');
    });


    $(window).scroll(function(){
        if ($(this).scrollTop() >= window.innerHeight+ 100) {
            $('.scroll-top').show();
            $('.main-menu-fixed').slideDown();
        } else {
            $('.scroll-top').hide();
            $('.main-menu-fixed').slideUp();
        }
    });
});



var greetings = [
    "Hello",
    "Marhaba",
    "Grüß Gott",
    "Namaskar",
    "Zdraveite",
    "Hola",
    "Hafa adai",
    "Nǐ hǎo",
    "Dobar dan",
    "Good day",
    "hyvää päivää",
    "Bonjour",
    "Dia dhuit",
    "Guten tag",
    "Yasou",
    "Shalom",
    "Namaste",
    "Jo napot",
    "Góðan dag",
    "Nde-ewo",
    "Selamat siang",
    "Salve",
    "Konnichiwa",
    "Ahn nyong ha se yo",
    "Salve",
    "Sveiki",
    "Moïen",
    "Bonġu",
    "Niltze",
    "Namastē",
    "Hallo",
    "Salam",
    "Cześć",
    "Olá",
    "Bună ziua",
    "Zdravstvuyte",
    "Zdravo",
    "Ahoj",
    "Hola",
    "Hujambo",
    "Hallå",
    "Ia orna",
    "Sawasdee",
    "Avuxeni",
    "Merhaba",
    "Zdravstvuyte",
    "Assalamo aleikum",
    "xin chào",
    "Shwmae",
    "Sawubona",
];


function changeGreeting(){
    var newIndex = Math.floor(Math.random()*greetings.length);
    console.log(newIndex + ":" + greetings[newIndex]);
    $('.greet').fadeOut("normal", function() {
        $(this).text(greetings[newIndex] + ',').fadeIn();
    });
}