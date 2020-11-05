const mainService = document.querySelector('#main-service')
const product = document.querySelector('#product')
let check = true



const mainItems = document.querySelector('#main-items')
const productItems = document.querySelector('#product-items')


const changeMain = () => {
    
    if (check) {
        // mainService.classList.add('animate__animated', 'animate__zoomIn');
        // mainService.style.setProperty('--animate-duration', '0.6s');
        // product.classList.add('animate__animated', 'animate__zoomOut');
        // product.style.setProperty('--animate-duration', '0.3s');

        // setTimeout(() => {
        //     product.classList.remove('animate__animated', 'animate__zoomOut');
        // }, 300);
        // setTimeout(() => {
        //     mainService.classList.remove('animate__animated', 'animate__zoomIn');

        // }, 900);

        mainService.classList.remove('main-services-bg')
        mainService.classList.remove('main-services')
        mainService.classList.add('main-services-bg-2')
        mainService.classList.add('products')
        product.classList.remove('product-bg')
        product.classList.remove('products')
        product.classList.add('product-bg-2')
        product.classList.add('main-services')
        mainItems.style.opacity = 1;
        productItems.style.opacity = 0;
        check =false;
    }
    else {

        // product.classList.add('animate__animated', 'animate__zoomIn');
        // product.style.setProperty('--animate-duration', '0.5s');

        // setTimeout(() => {
        //     product.classList.remove('animate__animated', 'animate__zoomIn');
            
        // }, 800);


        mainService.classList.add('main-services-bg')
        mainService.classList.add('main-services')
        mainService.classList.remove('main-services-bg-2')
        mainService.classList.remove('products')
        product.classList.add('product-bg')
        product.classList.add('products')
        product.classList.remove('product-bg-2')
        product.classList.remove('main-services')
        mainItems.style.opacity = 0;
        productItems.style.opacity = 1;
        check =true;
    }
}


mainService.addEventListener('click',changeMain)

product.addEventListener('click',changeMain)




ScrollReveal().reveal('.aply-1',{
    origin:'left',
    distance:'5rem',
    duration:400,
    easing:'ease-in'
});


ScrollReveal().reveal('.aply-2',{
    origin:'left',
    distance:'5rem',
    duration:600,
    easing:'ease-in'
});

ScrollReveal().reveal('.aply-3',{
    origin:'left',
    distance:'5rem',
    duration:800,
    easing:'ease-in'
});


ScrollReveal().reveal('.istehlak',{
    origin:'bottom',
    distance:'1rem',
    duration:400,
    easing:'ease-in'
});

ScrollReveal().reveal('.lombard',{
    origin:'bottom',
    distance:'1rem',
    duration:600,
    easing:'ease-in'
});


ScrollReveal().reveal('.cart',{
    origin:'bottom',
    distance:'1rem',
    duration:800,
    easing:'ease-in'
});


ScrollReveal().reveal('.faiz',{
    origin:'top',
    distance:'2rem',
    duration:1300,
    easing:'ease-in'
});

ScrollReveal().reveal('.b-kredit',{
    origin:'top',
    distance:'2rem',
    duration:1500,
    easing:'ease-in'
});

ScrollReveal().reveal('.apply',{
    origin:'top',
    distance:'2rem',
    duration:1700,
    easing:'ease-in'
});



ScrollReveal().reveal('.discount',{
    origin:'bottom',
    distance:'10rem',
    duration:2000,
    easing:'ease-in'
});



const circle = document.querySelector('.circle > g')
const circleS = document.querySelector('.circle-1 > g')
const circleT = document.querySelector('.circle-2 > g')
if (circle) {
    circle.style.fillOpacity = 1
circle.style.transition = "ease-in 1.5s"
circleS.style.fillOpacity = 1
circleS.style.transition = "ease-out 1.7s"

circleT.style.fillOpacity = 1
circleT.style.transition = "ease-in-out 2s"
setTimeout(() => {
    circle.style.fillOpacity = 0.26
    circleS.style.fillOpacity = 0.26
    circleT.style.fillOpacity = 0.26
}, 2000);

}





const ovalF = document.querySelector('.oval-1')
const ovalS = document.querySelector('.oval-2')
const ovalT = document.querySelector('.oval-3')

if (ovalF) {
    const changePos = (e) => {
         
         
        let _mouseX = e.clientX /8;
        let _mouseY = e.clientY / 5
        ovalF.style.left = `-${_mouseX + 5}px`
        ovalF.style.top = `${_mouseY + 5}px`
        ovalS.style.right = `-${_mouseX / 5}px`
        ovalS.style.top = `${_mouseY / 5}px`
        ovalT.style.right = `-${_mouseX}px`
        ovalT.style.top = `${_mouseY}px`
                
    }
    
    window.addEventListener('mousemove',changePos)
}


const drawer = document.querySelector('#drawer')


function openSideDrawer() {
    document.getElementById("side-drawer").style.right = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
  }
  
  function closeSideDrawer() {
    document.getElementById("side-drawer").style.right = "-1036px";
    document.getElementById("side-drawer-void").classList.add("d-none");
    document.getElementById("side-drawer-void").classList.remove("d-block");
  }