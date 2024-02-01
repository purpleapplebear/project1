

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
if(data == undefined) {
    data = {};
}

let dataBind = function () {

}

dataBind.get = function (key) {
    let field = data
    key.split(".").forEach(function(item) {
        field = field[item]
    })
    return field
}

dataBind.set = function (key, value) {
    data[key] = value
}

dataBind.display = function () {
    document.querySelectorAll("[name], [data]").forEach(function(item){

        if(item.name == undefined){
            let key = item.getAttribute("data")
            if (dataBind.get(key) !== undefined){
                item.innerText = dataBind.get(key)
            }
        }

            else {
                let key = item.name
                if (dataBind.get(key) !== undefined){
                    item.value = dataBind.get(key)
                }
            }
    })

    }


dataBind.save = function () {
    console.log(JSON.stringify(data))
    sessionStorage.setItem('data', JSON.stringify(data))
}


document.addEventListener("input", function(e) {
    dataBind.set(e.target.name, e.target.value)
    dataBind.display()
})



// document.querySelector("button").addEventListener("click", function () {

//     newInput = document.createElement("input")
//     newInput.setAttribute('name','name');
//     var parent = document.getElementById("container")
//     parent.appendChild(newInput)
// })



dataBind.display()


/*--------------------------------*/
















