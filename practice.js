function pushFront(arr, num){
    var newArr = [];
    for(var i = 0; i <= arr.length; i++){
        newArr[i] =  arr[i-1];
    }   
    newArr[0]= num;
    return newArr;
}//not efficient a new array cost data space
//look for possible ways to do this in place

var arr = [1, 2, 3];
var num = 0;
// console.log(pushFront(arr, num));

var array = [-1, -5, -6, -3];
var num1 = 4;
// console.log(pushFront(array, num1));

function popFront(arr){
    arr[arr.length]=arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return arr.pop();
}

// console.log(popFront(array));

function insertAt(arr, index, val){
    var newArr = [];
    newArr[index]= val;
    console.log(newArr);
    for(var i = 0; i <= arr.length; i++){
        if(i == index){
            //do nothing further
        } else if(i > index) {
            newArr[i] =  arr[i-1];
            console.log(newArr);
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr; 
}//Index to Skip = ITS


var array = [-1, -5, -6, -3];
console.log(insertAt(array, 7, 9));//undefined appears instead of empty
//not an official issue so I am skipping.