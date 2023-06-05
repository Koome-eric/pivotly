$(window).on("load",function() {
/*------------preloader-------------------------*/
  $(".preloader").fadeOut("slow");
});


$(document).ready(function (){
/*----------------Navbar shrink---------------------*/
$(window).on("scroll", function(){
    if($(this).scrollTop() > 90){
        $(".navbar").addClass("navbar-shrink");
    }
    else{
        $(".navbar").removeClass("navbar-shrink");
    }
});


  // toggle menu/navbar script 
  $(document).ready(function() {
    $('.menu-btn').click(function() {
      $('.menu').toggleClass("active");
      $(this).find('i').toggleClass("active");
    });
  });
   /*----------------------Features corousel----------------------*/
   $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

 /*----------------------Screenshots carousel----------------------*/
 $('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

 /*----------------------Testimonials carousel----------------------*/
 $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

 /*----------------------Team carousel----------------------*/
 $('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

/*-------------------------Page scrolling- Scrollit----------- */
$.scrollIt({
    topOffset: -50
});

/*------------------------Navbar Collapse----------------- */
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
});
/*-----------------------Toggle theme---Light and dark mode----- */
function toggleTheme(){
    if(localStorage.getItem("shala-theme") !== null){
        if(localStorage.getItem("shala-theme") === "dark"){
           $("body").addClass("dark");
        }
        else{
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
       localStorage.setItem("shala-theme","dark");
    }
    else{
       localStorage.setItem("shala-theme","light");
    }
    updateIcon();
});
function updateIcon(){
    if($("body").hasClass("dark")){
       $(".toggle-theme i").removeClass("fa-moon");
       $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}

});
/*----------------------Blogs carousel----------------------*/
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.getElementById('collapsibleNavbar');
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarTogglerIcon = navbarToggler.querySelector('i');
    var navbarNav = document.querySelector('.navbar-nav');
  
    function handleNavbarCollapse() {
      if (window.innerWidth > 947) {
        navbarCollapse.classList.remove('collapse');
        navbarNav.classList.add('show');
      } else {
        navbarCollapse.classList.add('collapse');
        navbarNav.classList.remove('show');
      }
    }
  
    handleNavbarCollapse();
  
    window.addEventListener('resize', function() {
      handleNavbarCollapse();
    });
  
    navbarTogglerIcon.addEventListener('click', function() {
      if (window.innerWidth <= 947) {
        navbarNav.classList.toggle('show');
      }
    });
  });

  window.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.getElementById('collapsibleNavbar');
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarTogglerIcon = navbarToggler.querySelector('i');
    var navbarNav = document.querySelector('.navbar-nav');
  
    function handleNavbarCollapse() {
      if (window.innerWidth > 947) {
        navbarCollapse.classList.remove('collapse');
        navbarNav.classList.add('show');
      } else {
        navbarCollapse.classList.add('collapse');
        navbarNav.classList.remove('show');
      }
    }
  
    handleNavbarCollapse();
  
    window.addEventListener('resize', function() {
      handleNavbarCollapse();
    });
  
    navbarTogglerIcon.addEventListener('click', function() {
      if (window.innerWidth <= 947) {
        navbarNav.classList.toggle('show');
      }
    });
  
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener('click', function(event) {
        if (window.innerWidth <= 947) {
          var subMenu = this.querySelector('#sub-menu');
          if (subMenu) {
            subMenu.style.display = 'block';
            event.preventDefault();
            event.stopPropagation();
          }
        }
      });
    }
  });
  
  
  
  