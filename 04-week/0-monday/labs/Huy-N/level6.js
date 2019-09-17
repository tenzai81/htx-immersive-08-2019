// function lvl6exercise1 (num) {
//     // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
num = 1
if (num == 1) {
    console.log("hello");
}
    else if (num == 2) {
        console.log("world");
    }
    else{
        console.log("bye");
    }
  
// //   function lvl6exercise2 () {
// //     // Push 10 'hello' strings into the array using a for loop, then return it
var array = []
    for (var i=0; i<10; i++){
        array.push("hello")
        console.log(array)
    }

//   function lvl6exercise3 () {
//     // Empty this array using a while loop and return it
var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
while(arr.length){
    var value = arr.pop();
    console.log(value);
   }
console.log(arr)

var arr1 = [ 1, 2, 4, 5,6]
while (arr1.length){
    var value = arr1.pop();
    console.log(value);
}
console.log(arr1)
