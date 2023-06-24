const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.nav-mobile')
const headerMobile = document.querySelector('.header-section');
const navFixed = document.querySelector("#nav-fixed");
const hidden = document.querySelector('.hidden');
const anchor = document.querySelector('.anchor');

//  Function menu mobile
iconMenu.addEventListener('click', function(){  
    menuMobile.classList.toggle('hidden');
    headerMobile.classList.toggle('hidden');
  }
);


//  Function - hiden menu when resolution is higher than 751px
window.addEventListener('resize', function(){
    if (window.innerWidth >= 751){        
        menuMobile.classList.add('hidden');
        headerMobile.classList.remove('hidden');
    }
  }
);


//  Function nav fixed
window.addEventListener("scroll", function(){  
    if (window.scrollY >= 601){ 
      navFixed.classList.add('open');
      navFixed.classList.remove('close');
      menuMobile.classList.add('hidden');
      headerMobile.classList.remove('hidden');

    }else{
      navFixed.classList.remove('open');
      navFixed.classList.add('close');      
    }
  }
);

//    ANCHOR  
window.addEventListener('scroll', function(){
    if(window.scrollY > 1000){
      anchor.classList.remove('close2');
      anchor.classList.add('open2');
      
    }else{      
      anchor.classList.remove('open2');
      anchor.classList.add('close2');
    }
  }
);
