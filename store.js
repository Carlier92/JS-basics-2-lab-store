// TODO:
// var products = []
var products = [
    { referenceNumber: 1001, name: "Apple", price: 1 },
    { referenceNumber: 1002, name: "Banana", price: 1 },
    { referenceNumber: 1003, name: "Meat", price: 10 },
    { referenceNumber: 1004, name: "Bread", price: 2 },
    { referenceNumber: 1005, name: "Pasta", price: 3 },
    { referenceNumber: 1006, name: "Sauces", price: 4 }
]

var shoppingCart = []
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {

    var refNr = askUserForReferenceNumber();
    console.log(shoppingCart);

    toCart(refNr)
    // Add the product with the matching referenceNumber to the shoppingCart




    // calculate the total price of your cart, and use it:
    displayTotalPrice( calculateTotalPrice() ); /*The variable holding the totol price*/

    var continueShopping = confirm("Do you want to continue shopping");
    if (continueShopping == true) {
        shopFromStore() //call function again
        displayProductsFromShoppingCart();

    } else {
        alert("Thank you, and goodbye");
        displayProductsFromShoppingCart();

    }
    // Ask the user if they want to continue shopping,
    // if yes, call this function again
    // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {
    // iterate over the shoppingCart and display the contents

    // use the printProductsOnScreen function for inspiration
    for(var product of shoppingCart){

        // create elements for refNr, name, price, with a class and the proper innerText
        var referenceNumberElement = document.createElement('span');
        referenceNumberElement.className  = 'referenceNumber';
        referenceNumberElement.innerText = product.referenceNumber;

        var nameElement = document.createElement('span');
        nameElement.className  = 'name';
        nameElement.innerText = product.name;

        var priceElement = document.createElement('span');
        priceElement.className  = 'price';
        priceElement.innerText = product.price;

        // Wrap our just created elements in a div
        var productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.appendChild(referenceNumberElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        // Hang that div on the page
        document.getElementById('shopping-cart').appendChild(productElement);
    }
};

var askUserForReferenceNumber = function() {
    var answer = window.prompt('reference number please:')
    return answer
    // Use window.prompt to ask the user a question and capture their response,
    // then, return the response from this function back to our caller
};

//declare a variable with a function
//use foreach loop
//get prices from array shoppingcard product.price
// var += product.price

var calculateTotalPrice = function () {
    var totalPrice = 0
    shoppingCart.forEach(function (product) {
        totalPrice += product.price
    })
    return totalPrice
}

var toCart = function (refNr) {
    products.forEach(function (product) {
        if (parseInt(refNr) === product.referenceNumber){
            shoppingCart.push(product)
        }
    })
}

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
    document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
    for(var product of products){

        // create elements for refNr, name, price, with a class and the proper innerText
        var referenceNumberElement = document.createElement('span');
        referenceNumberElement.className  = 'referenceNumber';
        referenceNumberElement.innerText = product.referenceNumber;

        var nameElement = document.createElement('span');
        nameElement.className  = 'name';
        nameElement.innerText = product.name;

        var priceElement = document.createElement('span');
        priceElement.className  = 'price';
        priceElement.innerText = product.price;

        // Wrap our just created elements in a div
        var productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.appendChild(referenceNumberElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        // Hang that div on the page
        document.getElementById('product-overview').appendChild(productElement);


    }
};

var runApp = function () {
    printProductsOnScreen();

    shopFromStore();
};

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        runApp();
    }
};
