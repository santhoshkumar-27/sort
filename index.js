// mergesort

const merge = (leftarr, rightarr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0; 

    while(leftIndex < leftarr.length && rightIndex < rightarr.length){
        const leftEl = leftarr[leftIndex];
        const rightEl = rightarr[rightIndex];

        if(leftEl < rightEl){
            output.push(leftEl);
            leftIndex++;
        }else{
            output.push(rightEl);
            rightIndex++;
        }
    }

    return [ ...output, ...leftarr.slice(leftIndex), ...rightarr.slice(rightIndex)]
}

// console.log(merge([8,9], [3,6]));
const mergeSort = array => {
    if(array.length == 1){
        return array;
    }
    const middleValue = Math.floor( array.length / 2 );
    const leftArr = array.slice(0, middleValue);
    const rightArr = array.slice(middleValue);
    return merge( 
        mergeSort(leftArr), 
        mergeSort(rightArr)
    );
};




// let arr = ;
let arrAns = mergeSort([5,6,8,9,1,2,4,78,65,24,4]);

console.log(arrAns)