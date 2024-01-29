// Add code here for part 5-7


// Do nt change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them


const clickColour = document.getElementById("textColour")
clickColour.addEventListener("click", blueToRed)

const clickBackground = document.getElementById("bgColour")
clickBackground.addEventListener("click", greenToPink)

const clickFont = document.getElementById("fonts")
clickFont.addEventListener("click", tnrToArial)


const mouseOver = event => { 
    event.target.backgroundColor = 'limegreen'
    if (event.target.textContent.indexOf('background') === -1 ) {
        event.target.textContent += ', I have had my background changed on mouse over';
    }
    else {
        event.target.textContent = event.target.textContent.replace("out", "over");
    }
    
}
tnrParagraph.addEventListener("mouseover", mouseOver)


const mouseOut = event => {
    event.target.style.backgroundColor = 'yellow';
    if(event.target.textContent.indexOf('background') === -1) {
        event.target.textContent += ', I have had my background changed on mouse out';
    }
    else {
        event.target.textContent = event.target.textContent.replace("over", "out");
    }
}

tnrParagraph.addEventListener('mouseout', mouseOut);