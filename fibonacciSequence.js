let arrayRec = []
arrayRec.push(0)
arrayRec.push(1)
let c = 1
function fibRec (num) {
    let Num
    if (num == 0) {
        return arrayRec;
    }
    Num = num - 1
    sum = arrayRec[c - 1] + arrayRec[c]
    arrayRec.push(sum)
    if (c == 1) {
        Num = Num - 2
    }
    c++
    fibRec(Num)
}
fibRec(10)
console.log(arrayRec)
function fibs (num) {
    cycles = num - 2
    i = 1
    let array = []
    array.push(0)
    array.push(1)
    while (cycles > 0) {
        sum = array[i - 1] + array[i]
        array.push(sum)
        cycles--
        i++ 
    }
    return array
}
console.log(fibs(8))