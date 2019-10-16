var arr = [ 'Dom', 'Kirk', 'Autumn', 'Trista', 'Jesslynddd', 'Juan', 'Robert', 'Keyur', 'Jason', 'Ben' ];
function sortArrLength(arr){
    return arr.sort(((a, b) => a.length - b.length));
}
console.log(sortArrLength();