/*......................................... NAV.................................................................................................................................... */

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let header= document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 0);
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= (desplazamientoActual)){
        header.style.top = "0";
    } 
    else{
        header.style.top = "-125px"
    }
    ubicacionPrincipal = desplazamientoActual;

} 


/* para el menu hamburguesa*/

let menu = document.querySelector(".menu")
let openBtn = document.querySelector(".menu__btn--open")
let closeBtn = document.querySelector(".menu__btn--close")

openBtn.addEventListener("click",()=>{
    menu.classList.add("active");
    openBtn.classList.add("sacar")
})
closeBtn.addEventListener("click",()=>{
    menu.classList.remove("active");
    openBtn.classList.remove("sacar")
})

/* ---------------------------------------paralax----------------------------------------------------------------------------------------------------------------------------------- */

let fondo1 = document.getElementById('fondo1');
let fondo2 = document.getElementById('fondo2');
let fondo3 = document.getElementById('fondo3');
let fondo4 = document.getElementById('fondo4');

let carrouselMedida = document.querySelector(".carrucel").clientHeight;




/* fondo1.style.transform = 'translateY('+ -288.3+'px)';
function moverFondo(fondo){
        let alturaViewport = document.documentElement.clientHeight;
        let posicion = window.pageYOffset||document.documentElement.scrollTop;
        addEventListener ('scroll',e=>{
            let scrollActual =  e.currentTarget.scrollY; 
            if (posicion<=scrollActual){
                fondo.target.style.transform = 'translateY(' + (scrollActual - (posicion + alturaViewport))*0.3 +'px)';
            }
            else{
                fondo.target.style.transform = 'translateY(' + (scrollActual - (posicion - alturaViewport))*0.3 +'px)';
            }
            console.log("--------------------------")
            console.log(scrollActual - (posicion + alturaViewport)*0.3)
            console.log("--------------------------")
            console.log(scrollActual - (posicion - alturaViewport)*0.3)
            console.log("actual  " + scrollActual)
            console.log("anterior  " + posicion)

    })
}


let paralax2= (fondos,oraculo) =>{
    fondos.forEach(fondo => {
        if(fondo.isIntersecting){
            moverFondo(fondo)
        }
        else{
            fondo.target.style.transform = 'translateY('+ 0 +'px)';
        }
    });
}

let oraculo = new IntersectionObserver(paralax2)

oraculo.observe(fondo1);
oraculo.observe(fondo2);
oraculo.observe(fondo3);
oraculo.observe(fondo4);
 */
/*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,carrucel,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */


 /* bandera anti clicks */
let bandera = false;


const slider = document.querySelector ("#carrucel");
let sliderSection = document.querySelectorAll (".slider__seccion");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const botonLeft = document.querySelector ("#boton--left")
const botonRigth = document.querySelector ("#boton--rigth")

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next () {
    if(bandera){
        return
    }
    else { 
    let sliderSectionFirst = document.querySelectorAll (".slider__seccion")[0];
    slider.style.marginLeft = "-200%";
    /*     animacion */
    
    // "transform cubic-bezier(.87,0,.13,1)";
    slider.style.transition = "all 3s cubic-bezier(.87,0,.13,1)";
    /* bandera anti clicks */
    bandera = true
    /* esto es para cambiar de lugar las imagenes */ 
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
        bandera = false;
    }, 3000);}
}

function Prev () {
    if(bandera){
        return
    }
    else{
        let sliderSection = document.querySelectorAll (".slider__seccion");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%";
        slider.style.transition = "all 3s";
        /* bandera  anti clicks */
        bandera = true;
        /* esto es para cambiar de lugar las imagenes */
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement("afterbegin", sliderSectionLast);
            slider.style.marginLeft = "-100%";
            bandera = false;
        }, 3000);
    }
}

/* ´´´´´´´´´´´´next automatico''''''''''''''' */

let idInterval = setInterval(Next,7000);
let idTimeOut = null
/* botones next y prev*/

botonRigth.addEventListener("click", function (){
    Next();

    /*corte next automatico */
    clearInterval(idInterval);
    idInterval = null;   /* se limpia la variable para que aloje un nuevo intervalo */

    /* ``````porque si se configuro otro intervalo Timeout se rompre ````*/
    if (idTimeOut){
        clearTimeout(idTimeOut);
        idTimeOut = null;
    };
    /* despues de este tiempo se vuelve a activar el next automatico */
    idTimeOut = setTimeout(function(){
                    /* porque si se configuro otro intervalo se rompre */
                    if (!idInterval) {
                        idInterval = setInterval(Next,7000);
                    }
                    
                },10000);
});

botonLeft.addEventListener("click", function (){
    Prev();
    /*corte next automatico */
    clearInterval(idInterval);
    idInterval = null;   /* se limpia la variable para que aloje un nuevo intervalo */

    /* porque si se configuro otro intervalo se rompre */
    if (idTimeOut){
        clearTimeout(idTimeOut);
        idTimeOut = null;
    };
    /* despues de este tiempo se vuelve a activar el next automatico */
    idTimeOut = setTimeout(function(){
                    /* porque si se configuro otro intervalo se rompre */
                    if (!idInterval) {
                        idInterval = setInterval(Next,7000);
                    }
                    
                },10000);
});



/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< maps<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */



/* function paralax (){
    fondo1.style.transform = 'translateY(' + (document.documentElement.scrollTop-document.documentElement.clientHeight) * 0.4+'px)';
addEventListener ('scroll',e=>{
    let scrollActual = e.currentTarget.scrollY;
    let alturaViewport = document.documentElement.clientHeight;
    let paginas= document.documentElement.offsetHeight / alturaViewport;

    let paginaActual = scrollActual/alturaViewport;
    let scrolTop = document.documentElement.scrollTop;
    console.log(paginaActual)
    
        if (paginaActual >= 0 && paginaActual < 2) {
            fondo1.style.transform = 'translateY(' + (scrolTop-alturaViewport) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 1.6 && paginaActual < 3) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*2.5)) * 0.4+'px)';
            
        }
        if (paginaActual >= 2.7 && paginaActual < 5) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*4)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 4.27 && paginaActual < 7) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*5.5)) * 0.4+'px)';
            
        }
})
}

paralax(

) */


