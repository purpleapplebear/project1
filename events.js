

/* document.querySelector("button").onclick = function () {
    alert(789)
}
        
document.querySelector("input").onchange = function (e) {
    console.log(this.value)
    console.log(e)
} */


/* --------------------------------------------------------------- */

/* document.querySelector("button").addEventListener("click", function () {
    alert(789)
})

document.querySelector("button:nth-child(2)").addEventListener("click", function () {
    alert("ABC")
}) */


/* --------------------------------------------------------------- */

/* let action = function () {
    alert(789)
}

document.querySelector("button").addEventListener("click", action)
document.querySelector("button:nth-child(2)").addEventListener("click", action) */



/* ----------------------Data Binding------------------------------ */


let data = {
    "name": " ",
    "address":"Placeholder address"
}

let dataBind = function () {

}

dataBind.get = function (key) {
    return data[key]
}

dataBind.set = function (key, value) {
    data[key] = value
}

dataBind.display = function () {
    document.querySelectorAll("[name], [data]").forEach(function(item){

        if (item.name == undefined){
            item.innerText = data[item.getAttribute("data")]
        }

        else {
            item.value = data[item.name]
        }

    })
}


document.querySelector("form").addEventListener("input", function(e) {
    dataBind.set(e.target.name, e.target.value)
    dataBind.display()
})



document.querySelector("button").addEventListener("click", function () {

    newInput = document.createElement("input")
    newInput.setAttribute('name','name');
    var parent = document.getElementById("container")
    parent.appendChild(newInput)
})

/* Teacher demo:



    let addItem = function(templateName) {
    let parentNode = document.getElementById("itemList")

    let node = document.createElement("div")
    let template = document.querySelector(`[data-template="${templateName}"]`).innerHTML

    template = template.replaceAll("{count}", parentNode.children.length)

    node.innerHTML =  template
    parentNode.appendChild(node)
} */



dataBind.display()


/*--------------------------------*/
















