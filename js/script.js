const offsetMar = document.querySelector('#mar').offsetTop,
offsetApr = document.querySelector('#apr').offsetTop,
offsetMay = document.querySelector('#may').offsetTop,
offsetJun = document.querySelector('#jun').offsetTop,
offsetJul = document.querySelector('#jul').offsetTop,
offsetAug = document.querySelector('#aug').offsetTop,
offsetSep = document.querySelector('#sep').offsetTop,
offsetOkt = document.querySelector('#okt').offsetTop,
offsetNov = document.querySelector('#nov').offsetTop;

var currentMonthDom;

function scrollFunction() {
    let scrollPos = window.scrollY; 
    setBodyClass(scrollPos);
    if(scrollPos > offsetMar) {
        // scroll gets the scrollPos minus where the last offset is (to start at 0 again), then gets the speed
        // by dividing the height by so 100% will be the end. Then minus 100 because the starting place
        // of the overflow div is -100%. Then we + 8.5% for every itreration it has gone. 
        let scroll = parseFloat(((((scrollPos - currentMonthDom.offsetTop) / (currentMonthDom.offsetHeight)) / 12.5 * 100) - 100) + (8.3 * document.body.getAttribute("data-multiplier")));
        console.log(currentMonthDom.offsetHeight);
        document.querySelector(".color").style = `transform: translateX(${scroll}%)`
    }
}

window.addEventListener('scroll', scrollFunction);
scrollFunction();


function setBodyClass(scrollPos) {  
    var classToAdd= "top",
        multiplier = 0;
    if(scrollPos >= offsetMar && scrollPos < offsetApr ) {
        classToAdd = "mar";
        multiplier = 0;
    }
    else if(scrollPos >= offsetApr && scrollPos < offsetMay ) {
        classToAdd = "apr";
        multiplier = 1;
    }
    else if(scrollPos >= offsetMay && scrollPos < offsetJun ) {
        classToAdd = "may";
        multiplier = 2;
    }
    else if(scrollPos >= offsetJun && scrollPos < offsetJul ) {
        classToAdd = "jun";
        multiplier = 3;
    }
    else if(scrollPos >= offsetJul && scrollPos < offsetAug ) {
        classToAdd = "jul";
        multiplier = 4;
    }
    else if(scrollPos >= offsetAug && scrollPos < offsetSep ) {
        classToAdd = "aug";
        multiplier = 5;
    }
    else if(scrollPos >= offsetSep && scrollPos < offsetOkt ) {
        classToAdd = "sep";
        multiplier = 6;
    }
    else if(scrollPos >= offsetOkt && scrollPos < offsetNov ) {
        classToAdd = "okt";
        multiplier = 7;
    }
    else if(scrollPos >= offsetNov) { 
        classToAdd = "nov";
        multiplier = 8;
    }

    currentMonthDom = document.querySelector("section#" + classToAdd);
    document.body.setAttribute('data-multiplier', multiplier);
    document.body.className = (classToAdd);
}