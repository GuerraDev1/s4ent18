function oneThroughTwenty() {
    let meuRetorno = []
    let cont = 1
    while(cont <= 20){
        meuRetorno.push(cont)
        cont++
    }
    return meuRetorno
}
console.log(oneThroughTwenty())



function evensToTwenty() {
    let meuRetorno = []
    let cont = 1
    while(cont <= 20){
        if(cont % 2 == 0){
            meuRetorno.push(cont)
            cont++
        } else {
            cont++
        }
    }
    return meuRetorno
}
console.log(evensToTwenty())



function oddsToTwenty() {
    let meuRetorno = []
    let cont = 1
        while(cont <= 20){
            if(cont % 2 != 0){
                meuRetorno.push(cont)
                cont++
            } else {
                cont++
            }
        }
        return meuRetorno
}
console.log(oddsToTwenty())



function multiplesOfFive() {
    let meuRetorno = []
    let cont = 1
        while(cont <= 100){
            if(cont % 5 == 0){
                meuRetorno.push(cont)
                cont++
            } else {
                cont++
            }
        }
        return meuRetorno
}
console.log(multiplesOfFive())



function squareNumbers() {
    let meuRetorno = []
    let cont = 1
        while(cont <= 100){
            let root = Math.sqrt(cont)
            if(root == Math.floor(root)){
                meuRetorno.push(cont)
                cont++
            } else {
                cont++
            }
        }
        return meuRetorno
}
console.log(squareNumbers())



function countingBackwards() {
    let meuRetorno = []
    let cont = 20
        while(cont >= 1){
            meuRetorno.push(cont)
            cont--
        }
        return meuRetorno
}
console.log(countingBackwards())


function evenNumbersBackwards() {
    let meuRetorno = []
    let cont = 20
        while(cont >= 1){
            if(cont % 2 == 0){
                meuRetorno.push(cont)
                cont--
            } else {
                cont--
            }
        }
        return meuRetorno
}
console.log(evenNumbersBackwards())



function oddNumbersBackwards() {
    let meuRetorno = [];
    let cont = 20
        while(cont >= 1){
            if(cont % 2 != 0){
                meuRetorno.push(cont)
                cont--
            } else {
                cont--
            }
        }
    return meuRetorno;
}
console.log(oddNumbersBackwards());



function multiplesOfFiveBackwards() {
    let meuRetorno = []
    let cont = 100
    while(cont >= 1){
        if(cont % 5 == 0){
            meuRetorno.push(cont)
            cont--
        } else {
            cont--
        }
    }
    return meuRetorno
}
console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards() {
    let meuRetorno = []
    let cont = 100
        while(cont >= 1){
            let root = Math.sqrt(cont)
            if(root == Math.floor(root)){
                meuRetorno.push(cont)
                cont--
            } else {
                cont--
            }
        }
        return meuRetorno
}
console.log(squareNumbersBackwards())















   