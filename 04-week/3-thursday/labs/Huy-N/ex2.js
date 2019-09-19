var arr = [ 1, 3, -4, 6, -12, 19]

var newArr = arr.filter(function(element){
    return element % 2 == 0;
});
console.log(newArr);