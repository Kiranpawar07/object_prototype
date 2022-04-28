const Basket = [];

function MyBasket(){

}

MyBasket.prototype.addToBasket = (name,price)=>{
    let a = new Object;
    a.itemName = name;
    a.itemPrice = price;
    Basket.push(a);
}

MyBasket.prototype.getBasketValue = ()=>{
    let sum = 0;
    for(let i = 0; i < Basket.length; i++){
        let y = Basket[i].itemPrice;
        sum = sum + y ;   
        
    }
    console.log("getBasketValue: "+sum)
    console.log()
}

MyBasket.prototype.item = ()=>{
    for(let i of Basket){
        console.log('Basket Item Name: '+i.itemName)
    }
  console.log()
}

MyBasket.prototype.getBasketClear = ()=>{
    Basket.length = 0;
}

let basket12 = new MyBasket();
basket12.addToBasket('icecream' , 35);
basket12.addToBasket('chocolate',75);

let x = basket12.getBasketValue()

basket12.item()

console.log('Basket Data:')
console.log(Basket)

let x1 = basket12.getBasketClear()
console.log()
console.log('getBasketClear: '+Basket.length)
console.log()
console.log('Empty Basket: ')
console.log(Basket)
