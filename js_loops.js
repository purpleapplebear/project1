
/* ---------- FOR EACH METHOD ------------- */

//Cannot return anything with a for each.
//Cannot be used with objects - only arrays

['a','b','c'].forEach(function(item){
    console.log(item);
});


/* ---------- MAP METHOD ------------- */

// can return an item - usable with React

['a','b','c'].map(function(item){
    console.log(item);
    return(item)
});


[{title:1},'b','c'].map(function(item){
    return`<p title="${item.title}">${item}</p>`
});



// Array of objects, using map as a method to go through each item. 
// Use function to reference item and return HTML depending on the parameters in the object
//maps the items onto a array

[
    {title:"Power Rangers", type:"cartoon", ageRange:10},
    {title:"Thunder Cats", type:"cartoon", ageRange:5},
    {title:"South Park", type:"cartoon", ageRange:50}
].map(function(item){
    return `<p title=${item.title}">${item.title} ${item.type} ${item.ageRange}</p>`;
});


/* ---------- REDUCE ------------- */

// Reduce - joins all the items into a string. 
// returns just the last item:

[
    {title:"Power Rangers", type:"cartoon", ageRange:10},
    {title:"Thunder Cats", type:"cartoon", ageRange:5},
    {title:"South Park", type:"cartoon", ageRange:50}
].reduce(function(total, item){
    return `<p title=${item.title}">${item.title} ${item.type} ${item.ageRange}</p>`;
});


// add a starting value (in this case an additional parameter of total and an empty string at the end)
//This way it returns all of the values joined together and not just the last item.

[
    {title:"Power Rangers", type:"cartoon", ageRange:10},
    {title:"Thunder Cats", type:"cartoon", ageRange:5},
    {title:"South Park", type:"cartoon", ageRange:50}
].reduce((total, item)=>{
    return total + `<p title=${item.title}">${item.title} ${item.type} ${item.ageRange}</p>`;
}, "");

//using the above method to do calculations with values:

[1,2,3,4].reduce((total, item)=>{
    return total + item;
}, 0);

// This returns 10 -> starting value of 0 + 1 + 2 + 3 + 4

[1,2,3,4].reduce((total, item)=>{
    return total + item;
}, "");

// This returns 1234 -> initial value is string so it concatanates the values

[1,2,3,4].reduce((total, item)=>{
    return item < 3 ? total + item : total;
}, 0);

// This returns 3 because the if statement condition is adding values of under 3, so 1+2



/* ------------ GETTERS AND SETTERS ------------- */

// destructuring
[a,b] = [10,20]

// ^^ sets a to 10 and b to 20

[a,,c] = [10,70,30]

// ^^ skips b and sets a to 10 and c to 30

let example = function() {
    return [100,200,300]
}

let [a,b,c] = example()

// ^^ returns a = 100, b = 200 and c = 300. Function returns an array and we then assign the array to different variables.

a = {x:10, y:10, z:10}
b = {a:10, b:10, c:10}

c = {...a, ...b}

// combines the objects together using the spread operator

c = {...b, d:10}

//creates a new object using all of object b adding a new keyvalue pair on top (d:10)

Object.keys(c)  //gets an array of all of the object keys
d = Object.entries(c) //gets an array of each key value pair in an array

d.map(item=>item[1]) // maps and returns the values in the array
