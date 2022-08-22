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

/* para el Submenu*/
let botonSub = document.querySelector(".submenu--btn")
botonSub.addEventListener("click",()=>{
    let subMenu = document.querySelector(".submenu")
    let flecha = document.getElementById ("flechita__sub")
    if (document.documentElement.clientWidth > 768){
        subMenu.classList.toggle("abierto")
        flecha.classList.toggle("rotado")
    }
    if (document.documentElement.clientWidth <= 768){
        subMenu.classList.toggle("abiertoHamburg")
        flecha.classList.toggle("rotado")
    }
} )

/* ---------------------------------------paralax----------------------------------------------------------------------------------------------------------------------------------- */
/* 
let fondo1 = document.getElementById('fondo1');
let fondo2 = document.getElementById('fondo2');
let fondo3 = document.getElementById('fondo3');
let fondo4 = document.getElementById('fondo4');

let carrouselMedida = document.querySelector(".carrucel").clientHeight;




fondo1.style.transform = 'translateY('+ -288.3+'px)';
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



function paralax (){
    fondo1.style.transform = 'translateY(' + (document.documentElement.scrollTop-(document.documentElement.clientHeight)) * 0.4+'px)';
addEventListener ('scroll',e=>{
    let scrollActual = e.currentTarget.scrollY;
    let alturaViewport = document.documentElement.clientHeight;
    let paginas= document.documentElement.offsetHeight / alturaViewport;
    let paginaActual = scrollActual/alturaViewport;
    let scrolTop = document.documentElement.scrollTop;
    console.log(paginaActual)
    
    if (document.documentElement.clientWidth <= 1920 && document.documentElement.clientWidth > 1285 ){
        if (paginaActual >= 0 && paginaActual < 1.68) {
            fondo1.style.transform = 'translateY(' + (scrolTop-(alturaViewport)) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 1.22 && paginaActual < 3.15) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*2.1)) * 0.4+'px)';
            
        }
        if (paginaActual >= 2.86 && paginaActual < 4.77) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*3.8)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 4.27 && paginaActual < 6.42) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*5.5)) * 0.4+'px)';
            
        }
    }
    if (document.documentElement.clientWidth <= 1285 && document.documentElement.clientWidth > 768 ){
        if (paginaActual >= 0 && paginaActual < 1.88) {
            fondo1.style.transform = 'translateY(' + (scrolTop-(alturaViewport)) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 1.94 && paginaActual < 3.97) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*3)) * 0.4+'px)';
            
        }
        if (paginaActual >= 4 && paginaActual < 6.28) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*5.3)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 6.5 && paginaActual < 8.41) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*7.5)) * 0.4+'px)';
            
        }
    }
    if (document.documentElement.clientWidth <= 600 && document.documentElement.clientWidth > 555){
        if (paginaActual >= 0 && paginaActual < 1.90) {
            fondo1.style.transform = 'translateY(' + (scrolTop-(alturaViewport)) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 2.26 && paginaActual < 4.41) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*3.1)) * 0.4+'px)';
            
        }
        if (paginaActual >= 4.86 && paginaActual < 7) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*5.8)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 7.5 && paginaActual < 9.15) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*9)) * 0.4+'px)';
            
        }
    }
    if (document.documentElement.clientWidth <= 414 && document.documentElement.clientWidth > 385){
        if (paginaActual >= 0 && paginaActual < 1.54) {
            fondo1.style.transform = 'translateY(' + (scrolTop-(alturaViewport)) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 1.53 && paginaActual < 3.38) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*2.8)) * 0.4+'px)';
            
        }
        if (paginaActual >= 3.54 && paginaActual < 5.36) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*4.5)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 5.44 && paginaActual < 9.15) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*6.5)) * 0.4+'px)';
            
        }
    }
    
    if (document.documentElement.clientWidth <= 385){
        if (paginaActual >= 0 && paginaActual < 1.76) {
            fondo1.style.transform = 'translateY(' + (scrolTop-(alturaViewport*0.9)) * 0.4+'px)';
        
            
        }
        if (paginaActual >= 2 && paginaActual < 4.1) {
            fondo2.style.transform = 'translateY(' + (scrolTop-(alturaViewport*3.4)) * 0.4+'px)';
            
        }
        if (paginaActual >= 4.6 && paginaActual < 6.74) {
            fondo3.style.transform = 'translateY(' + (scrolTop-(alturaViewport*5.9)) * 0.4+'px)';
            
        }
    
        if (paginaActual >= 7.13 && paginaActual < 8.79) {
            fondo4.style.transform = 'translateY(' + (scrolTop-(alturaViewport*8.5)) * 0.4+'px)';
            
        }
    }
    
})
}

paralax()


