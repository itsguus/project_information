function scrollFunction() {
    let scrollPos = window.scrollY; 
    if(scrollPos > 400) {
        let scroll = ((scrollPos - 400) * 0.01) - 100;
        if(scroll < 10) document.querySelector(".color").style = `transform: translateX(${scroll}%)`
    }
}

window.addEventListener('scroll', scrollFunction);
scrollFunction();