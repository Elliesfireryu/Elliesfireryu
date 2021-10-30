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
// console.log(insertAt(array, 7, 9));undefined appears instead of empty
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

// console.log(minToFront(arr));

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

function swap(arr, a) {
    var temp = arr[a];
    arr[a] = arr[arr.length-(a+1)];
    arr[arr.length-(a+1)] = temp;
}

function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        swap(arr, i);
    }
    return arr;
}


console.log(reverse([1,2,3,4,5]) + " reverse");

//RIOT reverse (Recap, input, output, tests, psuedocode walkthrough)
//in-place array reverse no second array, no built in f(x)
//input: arr
//output: rev arr
//test cases:
//[1, 0, 1] -> [1, 0, 1]
//[] -> []
//[2, 1] -> [1, 2]
//[1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
//[-1, 2, -4, 5] -> [5, -4, 2, -1]

//for loop
//arr[0] -> temp -> arr[arr.length- 1](last place) stop in the middle
//arr[1] -> arr[arr.length- 2]
//end loop at index arr.length/2

function swapR(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function rotateArr(arr, shiftBy){
    for(var i = 0; i < arr.length; i++){
        var newIndex = i + shiftBy;
        if(newIndex < arr.length) {
            swapR(arr, i, newIndex);
            // console.log(arr);
        }
        // if(newIndex >= arr.length-1) {
        //     newIndex - newIndex;
        //     swapR(arr, i, newIndex);
        //     // console.log(arr);
        // }
    }
    return arr + " Rotate";
}

console.log(rotateArr([0,1,2,3], 1));// works
console.log(rotateArr([0,1,2,3], 5));//doesn't work should look the same as above)':
console.log(rotateArr([0,1,2,3], -1)); //doesn't work with negatives 

// input: arr and the number of indices to shift by.
// output: arr
// shift values in the arr by the shiftBy number the 
// values shifted should equate wrap to the beginning of the arr and 
// operate in place

// allow negative shifts
// minimize memory usage
// minimize touches (idk what that means)

//for loop and a swap function




function filterRange(arr, min, max){
    var newI = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[newI] = arr[i];
            newI++;
            console.log(arr);
        }
    }
    arr.length = newI;
    return arr;
}

// input:arr, min max value
// output:arr
// goal start and end the array at the min and max respectively
console.log(filterRange([0,1,2,3], 1, 2));



function concat(arr, arr1){
    var arrEnd = (arr.length) + (arr1.length);
    var newArr = [];
    var j= 0;
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[i];
    }

    for(var i= arr.length; i < arrEnd; i++){
        newArr[i] = arr1[j];
        j++;
    }
    return newArr;
}

// console.log(concat([1,2,3], ["hi","hey"]));
// console.log(concat([], [1]));
// console.log(concat([1],[]));
// console.log(concat([],[]));

//input 2 arr's
//output 1 arr
//goal add the contents of the 2nd arr to the contents of the 1st arr
//test cases
//[], [1]
//[1], []
//[1], [1]