// Custom interval time (milliseconds)
$(document).ready(function(){
    $('#carouselExampleFade').carousel({
      interval: 1000 // 1 second
    });
  });
  
//navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    console.log('Scroll event triggered. Current scroll position: ', window.scrollY);
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Custom interval time (milliseconds)
$(document).ready(function(){
    $('#carouselExampleFade').carousel({
        interval: 1000 // 1 second
    });
});

// IntersectionObserver for section animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.5
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

