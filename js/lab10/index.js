// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

blueParagraph = document.getElementById("blueParagraph")

console.log(blueParagraph.style.color)
console.log(getComputedStyle(blueParagraph).color)


function blueToRed() {
    blueParagraph.style.color = "red"
    // console.log(blueParagraph.style.color)
    // console.log(getComputedStyle(blueParagraph).color)
    blueParagraph.textContent = blueParagraph.textContent.replace('blue', 'red')
}

greenParagraph = document.querySelectorAll(".greenBg")
console.log(greenParagraph[0].backgroundColor)
console.log(getComputedStyle(greenParagraph[0]).backgroundColor)


function greenToPink() {

    for (let para of greenParagraph) {
        para.className = "hotpinkBg"
        para.textContent = para.textContent.replace("green", "hotpink")
    }
}

tnrParagraph = document.getElementById("tnrParagraph")

console.log(tnrParagraph.style.fontFamily)
console.log(getComputedStyle(tnrParagraph).fontFamily)


function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial"
    tnrParagraph.textContent = tnrParagraph.textContent.replace('Times New Roman', 'Arial')

}