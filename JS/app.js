window.addEventListener("scroll",function (){
    this.document.querySelectorAll(".timeline .box").forEach(function (element){
        let scrollTop = window.scrollY;
        let elementOffset = element.offsetTop;
        let distance = elementOffset - scrollTop;
        let windowHeight = window.innerHeight;
        let breakpoint = windowHeight * -0.4;


        //console.log(breakpoint);

        if(distance < breakpoint){
            element.classList.add("active");
        }

        if(distance>breakpoint){
            element.classList.remove("active");
        }
        });
});