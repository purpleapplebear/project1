const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];

let buildP = (placeholder, num) => {

    let i = 0

    while (i < num) {
        let p = document.createElement("p")
        let text = document.createTextNode("any string I want in it")

        p.style.color = colours[parseInt(Math.random() * colours.length)];
        p.appendChild(text)
        placeholder.appendChild(p)
        i++
    }
}

buildP(document.querySelector('#placeholder'), 5)
