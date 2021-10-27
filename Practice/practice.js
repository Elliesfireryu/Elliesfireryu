function pushFront(arr, num){
    var newArr = [];
    for(var i = 0; i <= arr.length; i++){
        newArr[i] =  arr[i-1];
    }   
    newArr[0]= num;
    return newArr;
}//not efficient a new array cost data space
//look for possible ways to do this in place

var arr = [1, 2, 3, -1];
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

function minToFront(arr){
    var minIndex = 0;
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }
    }
    //shift everything left to the right
    for(var j = minIndex; j > 0; j--){
        arr[j]=arr[j - 1];
    }
    

    //put min at arr[0]
    arr[0] = min;
    return arr;
}

console.log(minToFront(arr));

//RIOT walk
//input: array
//output: array
//use cases
//min element -> arr[0]
//element left of min need to be shifted right 
//element right of min stay in place
//[4,2,1,3,5] - > [1,4,2,3,5]
// [] -> []
//[2, 2, 2, 2]
//min as first num 
//min as last num
//[1]

//psuedocode
//go through array and find min
//shift everything left of min to right
//pit min in front at arr[0]
