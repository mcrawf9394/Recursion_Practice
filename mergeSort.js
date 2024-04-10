function mergeSort (array) {
    if (array.length < 2) {
        return array
    }
    let middle = Math.floor(array.length / 2)
    let leftArray = array.slice(0, middle)
    let rightArray = array.slice(middle)
    return (merge(mergeSort(leftArray), mergeSort(rightArray)))
}
function merge (leftArray, rightArray) {
    let sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        }
        else {
            sortedArray.push(rightArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}
console.log(mergeSort([2, 5, 33, 1, -33, 27, 4, 3]))