const mainServices = document.querySelector('.main-services-bg')
const mainService = document.querySelector('#main-service')
const products = document.querySelector('.products-bg')
const product = document.querySelector('#product')
let check = true

const mainItems = document.querySelector('#main-items')
const productItems = document.querySelector('#product-items')

const smainservicesbg = document.querySelector('.s-main-services-bg');
const sproductsbg = document.querySelector('.s-products-bg');

const changeMain = () => {
    if (check) {
        if (smainservicesbg) {
            mainService.classList.remove('s-main-services-bg')
            mainService.classList.add('s-main-services-bg-2')
         
            product.classList.remove('s-products-bg')
            product.classList.add('s-products-bg-2')

            mainItems.style.opacity = 1
            productItems.style.opacity = 0
            check =false
        }
        else {
            mainService.classList.remove('main-services-bg')
            mainService.classList.remove('main-services')
            mainService.classList.add('main-services-2')
            mainService.classList.add('products')
         
            product.classList.remove('products-bg')
            product.classList.remove('products')
            product.classList.add('products-2')
            product.classList.add('main-services')
            mainItems.style.opacity = 1
            productItems.style.opacity = 0
            check =false
        }
         
    
    }
    else {
        mainService.classList.add('main-services-bg')
        mainService.classList.add('main-services')
        mainService.classList.remove('main-services-2')
        mainService.classList.remove('products')
     
        product.classList.add('products-bg')
        product.classList.add('products')
        product.classList.remove('products-2')
        product.classList.remove('main-services')
        mainItems.style.opacity = 0
        productItems.style.opacity = 1
        check =true

    }
}


// mainService.addEventListener('click',changeMain)

// product.addEventListener('click',changeMain)

// $( document ).ready(function() {
//     (function() {
//         // Add event listener
//         document.addEventListener("mousemove", parallax);
//         const elem = document.querySelector("#parallax");
//         // Magic happens here
//         function parallax(e) {
//             let _w = window.innerWidth/2;
//             let _h = window.innerHeight/2;
         
//             let _mouseX = e.clientX;
//             let _mouseY = e.clientY;
//             let _depth1 = `${70 - (_mouseX - _w) * 0.01}% ${30 - (_mouseY - _h) * 0.01}%`;
//             let _depth2 = `${70 - (_mouseX - _w) * 0.02}% ${30 - (_mouseY - _h) * 0.02}%`;
//             // let _depth3 = `${30 - (_mouseX - _w) * 0.06}% ${30 - (_mouseY - _h) * 0.06}%`;
//             let x = `${_depth2}, ${_depth1}`;
//             // console.log(x);
//             elem.style.backgroundPosition = x;
//         }
    
//     })()
  
       
//           $(".aply").animate({left: '250px'});
       
  

// });
ScrollReveal().reveal('.aply-1',{
    origin:'left',
    distance:'10rem',
    duration:1800,
    easing:'ease-in'
});


ScrollReveal().reveal('.aply-2',{
    origin:'left',
    distance:'10rem',
    duration:2000,
    easing:'ease-in'
});

ScrollReveal().reveal('.aply-3',{
    origin:'left',
    distance:'10rem',
    duration:2200,
    easing:'ease-in'
});


ScrollReveal().reveal('.credit-1',{
    origin:'bottom',
    distance:'10rem',
    duration:1800,
    easing:'ease-in'
});

ScrollReveal().reveal('.credit-2',{
    origin:'bottom',
    distance:'10rem',
    duration:2000,
    easing:'ease-in'
});


ScrollReveal().reveal('.credit-3',{
    origin:'bottom',
    distance:'10rem',
    duration:2200,
    easing:'ease-in'
});


ScrollReveal().reveal('.discount',{
    origin:'bottom',
    distance:'10rem',
    duration:2000,
    easing:'ease-in'
});

ScrollReveal().reveal('#load', { easing: 'ease-in-out' ,duration:2500,origin:"top"});

ScrollReveal().reveal('.advantage',{
    origin:'bottom',
    distance:'10rem',
    duration:1500,
    easing:'ease-in'
});
// const preloader = document.querySelector('#preloader')

// const load = document.querySelector('#load')
// load.style.display = "none"


// setTimeout(() => {
    
//     preloader.style.display = "none"
//     load.style.display = "block"

//     ScrollReveal().reveal('.aply-1',{
//         origin:'left',
//         distance:'10rem',
//         duration:500,
//         easing:'ease-in'
//     });
    
    
//     ScrollReveal().reveal('.aply-2',{
//         origin:'left',
//         distance:'10rem',
//         duration:700,
//         easing:'ease-in'
//     });
    
//     ScrollReveal().reveal('.aply-3',{
//         origin:'left',
//         distance:'10rem',
//         duration:900,
//         easing:'ease-in'
//     });
    
    
//     ScrollReveal().reveal('.credit-1',{
//         origin:'bottom',
//         distance:'10rem',
//         duration:900,
//         easing:'ease-in'
//     });
    
//     ScrollReveal().reveal('.credit-2',{
//         origin:'bottom',
//         distance:'10rem',
//         duration:900,
//         easing:'ease-in'
//     });
    
    
//     ScrollReveal().reveal('.credit-3',{
//         origin:'bottom',
//         distance:'10rem',
//         duration:900,
//         easing:'ease-in'
//     });
    
    
//     ScrollReveal().reveal('.discount',{
//         origin:'bottom',
//         distance:'10rem',
//         duration:900,
//         easing:'ease-in'
//     });


    
// }, 1000);


