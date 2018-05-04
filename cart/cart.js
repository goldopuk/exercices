var Cart = {};

Cart.products = [];
Cart.addProduct = function (product) {
  this.products.push(product);
};

Cart.getProductNumber = function () {
    return this.products.length;
};

function buildProduct(name, priceHT, qty) {

    var product = {};
    product.name = name;
    product.priceHT = priceHT;
    product.qantity = qty;

    product.getPriceTTC = function () {
        return this.priceHT * 1.2;
    };

    return product;
}

Cart.addProduct(buildProduct('tomate', 10, 5));
Cart.addProduct(buildProduct('salade', 10, 5));
Cart.addProduct(buildProduct('pomme', 10, 5));

function displayCart(cart) {

    var container = document.querySelector('#products-container');

    for (var i = 0; i < Cart.products.length; i++) {

        var nodeLi = document.createElement('li');
        nodeLi.innerHTML = Cart.products[i].name;

        container.appendChild(nodeLi);
    }

}

displayCart(Cart);


