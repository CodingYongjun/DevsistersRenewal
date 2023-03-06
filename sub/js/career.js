const slideBox=document.querySelector('.slide_box');
    const slides=slideBox.querySelectorAll('.slide');
    const lastSlide=slides.length-1;
    const first=slides.item(0);
    const last=slides.item(lastSlide);
    
    let indexNum=1;
    slideBox.append(first.cloneNode(true));
    slideBox.insertBefore(last.cloneNode(true),first);

    window.addEventListener('resize',()=>{
        let slideW=slides[0].offsetWidth;
        slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
    });
    
    const page=document.querySelector('.page_view');

    const next=document.querySelector('.next');
    const prev=document.querySelector('.prev');
    const next_btn=()=>{
        indexNum++
        slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
        slideBox.style.transition='transform .3s';
        slideBox.addEventListener('transitionend',()=>{
            if(indexNum==(lastSlide+2)){
            indexNum=1;
            slideBox.style.transition='none';
            slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
            }
            if(indexNum==0){
                indexNum=lastSlide+1;
                slideBox.style.transition='none';
                slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
            }
            page.innerHTML=indexNum;
        });
    }
    const prev_btn=()=>{
        indexNum--;
        slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
        slideBox.style.transition='transform .3s';
        slideBox.addEventListener('transitionend',()=>{
            if(indexNum==(lastSlide+2)){
            indexNum=1;
            slideBox.style.transition='none';
            slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
            }
            if(indexNum==0){
                indexNum=lastSlide+1;
                slideBox.style.transition='none';
                slideBox.style.transform=`translateX(-${slideW*indexNum}px)`;
            }
            page.innerHTML=indexNum;
        });
    }
    next.addEventListener('click',()=>{
        next_btn();
    });
    prev.addEventListener('click',()=>{
        prev_btn();
    });