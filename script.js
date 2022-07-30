let cart = [];

let water = {Name: 'water', Price: 1.00}
let coke = {Name: 'coke', Price: 2.00}
let doritos = {Name: 'doritos', Price: 1.75}
let tea = {Name: 'tea', Price: 1.25}
let coffee = {Name: 'coffee', Price: 2.00}

function addItems(name, price)
{
    let item=
    { Name: name,
      Price: price
    }
    cart.push(item)
    console.log('Added to your cart: ', item.Name)
}

function DisplayReceipt()
{
    let total = 0;
    cart.forEach((element) => 
    {  console.log(element.Name, element.Price)
        total += element.Price
    })
    console.log("Your total is: ", total)
    cart.length = 0
}



