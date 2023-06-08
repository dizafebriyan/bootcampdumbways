
var array = ["diza","febriyan","hasal"];



array.forEach(function(item){
    console.log(item);
});

console.log(array);

var double = array.map((item)=>{
    return item +"cok";
});

console.log ("MAP :",double);

// HOF filter
var arr1 = [1,2,3,4,5,6]
arr1 = arr1.filter(function(item){
    return item % 2 == 0;
});
console.log(arr1);

// HOF reduuce
var arr2 = [1,2,3,4,5,6]
arr2 = arr2.reduce(function(total,item){
    return total+item;
},0);

console.log("reduce",arr2)


// CALLBACK FUNCTION
function a(){
    console.log("whatsapp");
}
function b(){
    console.log("why");
}

function l(meong,callback){
    console.log(meong,"adalah panggilan kucing untuk mengatakan = ");
    callback();
}

l("meong",a);