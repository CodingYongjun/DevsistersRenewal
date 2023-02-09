$(function(){
    $('.toggle').on('click',function(){
        $(this).toggleClass('on');
        $('#nav').toggleClass('on');
        $('.gnb>ul').fadeToggle(100);
        $('h1').toggleClass('on');
    });
});