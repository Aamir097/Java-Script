let product_name = 'Keyboards';
let product_price = 800;
let product_quantity = 12;
let total = product_price * product_quantity;
let discount = total * 0.1;
let netTotal= total - discount;

console.log(`Product Name ${product_name}`);
console.log(`Product Price : ${product_price}`);
console.log(`Product Quantity : ${product_quantity}`);
console.log(`Total : ${total}`);
console.log(`Discount : ${discount}`);
console.log(`Net Total: ${netTotal}`);