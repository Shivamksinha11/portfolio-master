const btn1=document.querySelector(".btn1");
btn1.addEventListener('click',scroll1);
function scroll1(){
    window.scrollTo(0, 650);
}


$(document).on("scroll", function(){ 
    // or as a shorthand $(document).scroll(function(){
    if($(document).scrollTop() > 650)
        {
            //begin to scroll
            $(".navy").css("position","fixed");
            $(".navy").css("top",0);
        }
        else
        {
            //lock it back into place
            $(".navy").css("position","relative");
        }
    });