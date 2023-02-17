$(function(){
let page=0;
let movingState=false;

$(window).on('mousewheel',function(event){
    if($(window).width()>1024){
        if(!movingState){
            movingState=true;
            if(event.deltaY<0){
                page++;
                if(page>=6){page=6;}
            }else{
                page--
                if(page<=0){page=0;}
            }
            $('html,body').stop().animate({scrollTop:$(window).height()*page},500,'easeOutCubic',function(){movingState=false;});
        }
    }
});

$(window).on('resize',function(){
    let winH=$(window).height();
    if($(window).width()>1024){
        $('.section').height(winH);
    }
    $('.content1').height(winH);
    $('.mv>video').height(winH);
})

$('.mv>video').trigger('pause');
$('.mv').eq(0).children('video').trigger('play');
let indexNum=0;
let targetPosition=0;
let mvWidth=$('.mv').width();
let maxNum=$('.mv').length;
$('.pagenate>span').width(0);
$('.pagenate>span').stop().animate({width:'100%'},13000);
function movieChange(){
    let movies=$('.movie_wrap').children('.mv');
    $('.movie_wrap').stop().animate({ left:-mvWidth }, 10, function(){
        movies.eq(0).appendTo( $('.movie_wrap'));
        $('.movie_wrap').css('left',0);
        $('.mv>video').trigger('pause');
        $('.mv').eq(0).children('video').get(0).currentTime=0;
        $('.mv').eq(0).children('video').get(0).play();
    });
    indexNum++;
    if(indexNum>=maxNum){
        indexNum=0;
    }
    $('.mv_title>ul>li').hide();
    $('.mv_title>ul>li').eq(indexNum).show();
    $('.pagenate>span').width(0);
    $('.pagenate>span').stop().animate({width:'100%'},13000);
}

function movieChange2(){
    let movies=$('.movie_wrap').children('.mv');
    movies.eq(maxNum-1).prependTo( $('.movie_wrap'));
    $('.movie_wrap').css('left',-mvWidth);
    $('.movie_wrap').stop().animate({ left:0 }, 100, function(){
        $('.mv>video').trigger('pause');
        $('.mv').eq(0).children('video').get(0).currentTime=0;
        $('.mv').eq(0).children('video').get(0).play();
    });
    indexNum--;
    if(indexNum<0){
        indexNum=maxNum-1;
    }
    $('.mv_title>ul>li').hide();
    $('.mv_title>ul>li').eq(indexNum).show();
}
let timer=setInterval(movieChange, 13000);
$('.next').on('click',function(event){
    clearInterval(timer);
    $('.pagenate>span').css('width','0%');
    $('.pagenate>span').stop().animate({width:'100%'},13000);
    movieChange();
    timer=setInterval(movieChange, 13000);
});
$('.prev').on('click',function(event){
    clearInterval(timer);
    $('.pagenate>span').width(0);
    $('.pagenate>span').stop().animate({width:'100%'},13000);
    movieChange2();
    timer=setInterval(movieChange, 13000);
})

let data=new Array;
data[0]=['https://www.youtube.com/embed/0MM214bxlDc','url("img/ovenbreaklogo.png")',
    ['https://apps.apple.com/kr/app/id963067330','https://play.google.com/store/apps/details?id=com.devsisters.gb',
        'https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000745409&scYn=Y','https://galaxystore.samsung.com/detail/com.devsisters.gb'],'https://galaxystore.samsung.com/detail/com.devsisters.gb'];
data[1]=['https://www.youtube.com/embed/OwbEBrA63JM','url("img/kingdomlogo.png")',['https://apps.apple.com/kr/app/id1509450845','https://play.google.com/store/apps/details?id=com.devsisters.ck','https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000751155&scYn=Y','https://galaxystore.samsung.com/detail/com.devsisters.ck'],'https://www.cookierun-kingdom.com/ko/'];
data[2]=['https://www.youtube.com/embed/E54dujjfHBE','url("img/puzzlelogo.png")',['https://apps.apple.com/kr/app/id1434784802','https://play.google.com/store/apps/details?id=com.devsisters.cookiepuzzle'],'https://game.devsisters.com/ko/cookierunpuzzle/#features'];
data[3]=['https://www.youtube.com/embed/esd4x45AY0s','url("img/ovensmashlogo.png")',[],'https://ovensmash.com/kr'];
data[4]=['https://www.youtube.com/embed/s2H2kOrtPL8','url("img/brixitylogo.png")',[],'https://www.playbrixity.com/ko/'];
data[5]=['https://www.youtube.com/embed/_4B0Oc77z28','url("img/deadcideclublogo.png")',[],'https://deadcideclub.com/ko-kr/kr'];

$('.game_list').find('a').on('click',function(event){
    event.preventDefault();
    let indexNum=$(this).parent().index();
    $('.game_list').find('a').removeClass('on');
    $(this).addClass('on');
    $('.game_mv').attr('src', data[indexNum][0]);
    $('.game_title').css('background-image',data[indexNum][1]);
    $('.home').attr('href',data[indexNum][3]);
    let btnsNum=data[indexNum][2].length;
    if( btnsNum==null ){
        $('.game_break_box>ul').empty();
    }else{
        $('.game_break_box>ul').empty();
        for(let i=0; i<btnsNum; i++){
        let a=$('<a></a>').attr('href',data[indexNum][2][i]).attr('target','_blank');
        $('.game_break_box>ul').append( $('<li></li>').append(a));
        }
    }
});

});