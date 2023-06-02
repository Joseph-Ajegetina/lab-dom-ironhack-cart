// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const priceNode = product.querySelector('.price span');
  const quantityNode = product.querySelector('.quantity input');
 
  const price = Number(priceNode.innerText)
  const quantity = Number(quantityNode.value);
  const total = price * quantity;

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = total;

  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = [...document.querySelectorAll('.product')];

  products.forEach((product) => total += updateSubtotal(product))


  // ITERATION 3
  //... your code goes here
  const totalNode = document.querySelector('#total-value span')
  totalNode.innerText = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here 
  const targetElem = event.currentTarget;
  const row = targetElem.parentNode.parentNode

  const parentNode = document.querySelector('tbody');
  parentNode.removeChild(row);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input[type="text"]').value;
  const price = document.querySelector('.create-product input[type="number"]').value;

  const newProductNode = createProductRow(name, price);

  const parent = document.querySelector('tbody');
  parent.appendChild(newProductNode);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnsNode = [...document.querySelectorAll('.btn-remove')];
  removeBtnsNode.forEach(elem => elem.addEventListener('click', event => {
  removeProduct(event)
   }));

  const createBtnNode = document.querySelector('#create');
  createBtnNode.addEventListener('click', createProduct)
});


function createProductRow(name, price){
  const row = document.createElement('tr');
  row.className = 'product';

  const nameNode = createColumnNode()
  nameNode.className = 'name';
  const nameSpan = createSpanNode();
  nameSpan.textContent = name;
  nameNode.appendChild(nameSpan);

  row.appendChild(nameNode)

  const priceNode = createColumnNode();
  priceNode.className = 'price';
  priceNode.textContent = '$';
  const priceSpan = createSpanNode();
  priceSpan.textContent = price
  priceNode.appendChild(priceSpan)

  row.appendChild(priceNode)

  const quantityNode = createColumnNode();
  quantityNode.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.placeholder = 'Quantity';
  quantityNode.appendChild(quantityInput);

  row.appendChild(quantityNode);

  const subtotalNode = createColumnNode();
  subtotalNode.className = 'subtotal';
  subtotalNode.textContent = '$';
  const subtotalSpan = createSpanNode();
  subtotalSpan.textContent = 0;
  subtotalNode.appendChild(subtotalSpan)

  row.appendChild(subtotalNode);

  const removeNode = createColumnNode();
  removeNode.className = 'action';
  const removeBtnNode =  document.createElement('button');
  removeBtnNode.className = 'btn btn-remove';
  removeBtnNode.textContent = 'Remove';
  removeBtnNode.addEventListener('click', e => removeProduct(e));
  removeNode.appendChild(removeBtnNode)

  row.appendChild(removeNode);

  return row;
}

function createColumnNode(){
  return document.createElement('td')
}

function createSpanNode(){
  return document.createElement('span')
}
