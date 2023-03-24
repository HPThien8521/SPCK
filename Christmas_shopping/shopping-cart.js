let price1 = document.getElementById('price-1').innerHTML;
let price2 = document.getElementById('price-2').innerHTML;
let price3 = document.getElementById('price-3').innerHTML;
let quantity1 = document.getElementById('quantity1');
let quantity2 = document.getElementById('quantity2');
let quantity3 = document.getElementById('quantity3');
    console.log(price1, price2, price3)
function update() {
    price1 = 24.99 * quantity1.value;
    price2 = 119.95 * quantity2.value;
    price3 = 14.49 * quantity3.value;
    price1 = price1.toFixed(2);
    price2 = price2.toFixed(2);
    price3 = price3.toFixed(2);
    let subtotal = parseFloat(price1) + parseFloat(price2) + parseFloat(price3);
    let tax = subtotal * .08
    let total = subtotal + parseFloat(tax)
    subtotal = subtotal.toFixed(2)
    tax = tax.toFixed(2)
    total = total.toFixed(2)
    document.getElementById('price-1').innerHTML = "$" + price1.toString()
    document.getElementById('price-2').innerHTML = "$" + price2.toString()
    document.getElementById('price-3').innerHTML = "$" + price3.toString()
    document.getElementById('tax').innerHTML = "$" + tax.toString()
    document.getElementById('subtotal').innerHTML = "$" + subtotal.toString()
    document.getElementById('total').innerHTML = "$" + total.toString()
    requestAnimationFrame(update)
}
update()