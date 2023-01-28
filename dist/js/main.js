mediumZoom('.zoom',{
    margin: 50,
    scrollOffset: 200,
    background: '#fff',
});

ScrollReveal().reveal('.right',{ duration: 2000 ,distance:"60px",origin:"right"});
ScrollReveal().reveal('.left',{ duration: 2000 ,distance:"60px",origin:"left"});
ScrollReveal().reveal('.top',{ duration: 2000 ,distance:"-50px",origin: "top",interval: 200 });
ScrollReveal().reveal('.bottom',{ duration: 2000 ,distance:"-50px",origin: "bottom",interval: 200 });
