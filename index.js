$(document).ready(function (){

    $(".navbar-toggler").click(function (){

        $(".header_Menu").toggleClass("Show_Menu");

    });
    let slide = $("._carousel");
    let carouselList = $("._carousel-list li");
    let vitri = 0;
    setInterval(function (){

            if (vitri < slide.length -1 ){
                  vitri = vitri+1;
                $("._carousel-group").css("transform",`translateX(${-vitri*100}%)`);
            }else if (vitri == slide.length -1){
                vitri = 0;
                $("._carousel-group").css("transform",`translateX(${-vitri*100}%)`);
            }

            if (vitri){
                carouselList[vitri].classList.add('active-item');
            }else {
                carouselList.removeClass('active-item');
            }

        if (vitri < carouselList.length -1){
            for (var i=0;i<carouselList.length;i++){
                console.log(carouselList[i]);
                carouselList[i].classList.remove("active-item");
            }
            carouselList[vitri].classList.add('active-item');
        }else {
            for (var i=0;i<carouselList.length;i++){
                carouselList[i].classList.remove("active-item");
            }
            carouselList[0].classList.add('active-item');
        }

    },3500)

})



