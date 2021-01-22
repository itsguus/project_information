var sections = [];
function getAllSections() {
    var allSections = document.querySelectorAll('main > section');
    allSections.forEach(
        function (section) {
            var d = {
                name: section.getAttribute('id'),
                height: section.offsetHeight,
                offset: section.offsetTop,
                el: section
            }
            sections.push(d);
        });
}
getAllSections();


function scrollFunction() {
<<<<<<< HEAD
    let scrollPos = window.scrollY; 
    setBodyClass(scrollPos);
    if(scrollPos > offsetMar) {
        // scroll gets the scrollPos minus where the last offset is (to start at 0 again), then gets the speed
        // by dividing the height by so 12.5 * 100% (every line is 1/8 of total) will be the end. Then minus 100 because the starting place
        // of the overflow div is -100%. Then we + 8.3% for every iteration it has done otherwise it would start again at 0. 
        let scroll = parseFloat(((((scrollPos - currentMonthDom.offsetTop) / (currentMonthDom.offsetHeight)) / 12.5 * 100) - 100) + (8.3 * document.body.getAttribute("data-multiplier")));
        document.querySelector(".color").style = `transform: translateX(${scroll}%)`
=======
    let scrollPos = window.scrollY;
    currentSectionObj = getSection(scrollPos);
    document.body.className = currentSectionObj.name;
    innerPos = parseInt(scrollPos - currentSectionObj.offset) / currentSectionObj.height + 0.45;
    // console.log(innerPos);
    updateProgressBar(scrollPos);
    if (currentSectionObj.name == "introduction") {
        addClassAt("cloud1", 0.5, innerPos);
        addClassAt("cloud2", 0.7, innerPos);
        addClassAt("noclouds", 0.95, innerPos);
>>>>>>> 10f10f8d607ebb96ae034e9106ef0d93b2a3db1e
    }

    else if (currentSectionObj.name == "cijfers") {
        if (!currentSectionObj.el.classList.contains("counterStarted")) startCounter(currentSectionObj.el);
        addClassAt("showBlocks", 0.5, innerPos);
        addClassAt("overflow", 0.58, innerPos);
        addClassAt("block1", 0.65, innerPos);
        addClassAt("block2", 0.70, innerPos);
        addClassAt("block3", 0.75, innerPos);
        addClassAt("inbraken", 0.9, innerPos);
        addClassAt("legend", 1.3, innerPos);
        addClassAt("axes", 1.4, innerPos, document.querySelector("#stackedbar"));
        addClassAt("bar1", 1.5, innerPos, document.querySelector("#stackedbar"));
    }
    else if(currentSectionObj.name == "stackedbar") {
        addClassAt("axes", 0, innerPos, document.querySelector("#stackedbar"));
        addClassAt("bar1", 0, innerPos);
        addClassAt("bar2", 0.35, innerPos);
        addClassAt("bar3", 0.57, innerPos);
        addClassAt("allbars", 0.8, innerPos);
        addClassAt("hide", 0.9, innerPos, document.querySelector("#cijfers"));
        addClassAt("hide", 0.9, innerPos);
    }
    else if(currentSectionObj.name == "stories") {
        addClassAt("one", 0.48, innerPos);
        addClassAt("two", 0.7, innerPos);
        addClassAt("three", 1.01, innerPos);
        addClassAt("four", 1.37, innerPos);
    }
}

function updateProgressBar(y) {
    const bar = document.querySelector("div.progress"),
    siteHeight = document.body.offsetHeight; 
    var percentage = ((y + window.innerHeight) / siteHeight) * 100;
    bar.style.width = `${percentage}%`
}

function startCounter(el) {
    el.classList.add("counterStarted");
    var countSpan = el.querySelector('figure span'),
        counterInterval = setInterval(
            function () {
                var counter = parseInt(countSpan.textContent);
                counter = counter + 421;
                if (counter > 590498) {
                    clearInterval(counterInterval);
                    counter = 590498;
                    setInterval(function () { countSlowly(el) }, 1000);
                }
                countSpan.textContent = counter;
            }, 1
        );
}

function countSlowly(el) {
    var countSpan = el.querySelector('figure span'),
        counter = parseInt(countSpan.textContent);
    counter++;
    countSpan.textContent = counter;
}

function addClassAt(name, percentage, innerPos, otherEl) {
    var currentSectionEl = getSection(window.scrollY).el;
    if (!otherEl) {
        if (innerPos >= percentage) currentSectionEl.classList.add(name);
        else if (innerPos < percentage) currentSectionEl.classList.remove(name);
    }
    else { 
        if (innerPos >= percentage) otherEl.classList.add(name);
        else if (innerPos < percentage) otherEl.classList.remove(name);
    }
}

function getSection(y) {
    var i;
    y = parseInt(y + (window.innerHeight / 4));
    for (i = 0; i < sections.length; i++) {
        if (!sections[i + 1]) return sections[sections.length - 1];
        if (y >= sections[i].offset && y < sections[i + 1].offset) {
            return sections[i];
        }
    }
}

window.addEventListener('scroll', scrollFunction);
scrollFunction();

const playButtons = document.querySelectorAll("audio + img");
playButtons.forEach(
    function(btn) {
        btn.addEventListener("click", function() {
            if(!btn.classList.contains("active")) {
                document.querySelectorAll("audio").forEach(
                    function(audio) {
                        audio.pause();
                        audio.parentNode.querySelector("img").classList.remove("active")
                    }
                );
                if(this.classList.contains("audio3")) this.parentNode.querySelector("audio").volume = 0.3;
                this.parentNode.querySelector("audio").play();
                this.classList.add("active");
            }
            else {
                this.parentNode.querySelector("audio").pause();
                this.classList.remove("active");
            }
        });
    }
)

const audios = document.querySelectorAll("audio");
audios.forEach(
    function(audio) {
        audio.onended = function() {
            this.parentNode.querySelector('img').classList.remove("active");
        }
    }
);