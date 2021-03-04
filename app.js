// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(Qdollar) {
  
    let Tyen = (Qdollar / oneEuroIs.USD)*oneEuroIs.JPY
    
    return Tyen
}
 let xdollar = 1

console.log(xdollar + " dollars are " + fromDollarToYen(xdollar).toFixed(2) + " yens")

const fromEuroToDollar = function(Qeuro) {
  
    let Tdollar = Qeuro * oneEuroIs.USD;
   
    return Tdollar
}
 let xeuro = 3.5

console.log(xeuro + " euros are " + fromEuroToDollar(xeuro).toFixed(2) + " dollars")

const fromYenToPound = function(Qyen) {
  
    let Tpound = (Qyen / oneEuroIs.JPY)*oneEuroIs.GBP
   
    return Tpound
}
 let xyen = 1000

console.log(xyen + " yen are " + fromYenToPound(xyen).toFixed(2) + " pounds")

module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar }
