window.onload = function(){
  console.log("evento onload window");

  var btnTotalPrice = document.getElementById("calculate-total-price");
  var createItemButton = document.getElementById("newProductBtn");
  var deleteButtons = document.getElementsByClassName('btn-delete');
  btnTotalPrice.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i<deleteButtons.length; i++) {
    console.log("asignado evento onclick al botón delete n: " + i);
    deleteButtons[i].onclick = deleteItem;
  }
}

/*
//
//
//
*/
function getTotalPrice() {
  console.log("función getTotalPrice llamada con el evento onclick");
  var unitPrices = document.getElementsByClassName("product-cost");
  var units = document.getElementsByClassName("units");
  var subtotals = document.getElementsByClassName("product-total");
  console.log("total de artículos listados: " + unitPrices.length);
  var total = 0;

  for (i=0; i<unitPrices.length; i++){
    console.log("precio artículo: " + parseFloat(unitPrices[i].innerHTML));
    console.log("unidades artículo: " + units[i].value);
    subtotal = parseFloat(unitPrices[i].innerHTML)*units[i].value;
    console.log("subtotal artículo: " + subtotal);
    subtotals[i].innerHTML = subtotal;
    total += subtotal;
  }

  document.getElementById("total-price").innerHTML = total;
}

/*
//
//
//
*/
function deleteItem() {
  console.log("FUNCTION deleteItem");
  var fatherProduct = this.parentElement.parentElement;
  if (fatherProduct) {
    fatherProduct.innerHTML="";
    getTotalPrice()
  }
}


/*
//
//
//
*/
function createNewItem() {
  console.log("FUNCTION createNewItem");
  var newName = document.getElementById("newProductText").value;
  var newPrice = parseFloat(document.getElementById("newProductPrice").value);
  
  if (newName && newPrice >= 0) {
    console.log(newName);
    console.log(newPrice);
  /*Creamos la section del nuevo producto y lo insertamos */
    var newProduct = document.createElement('section');
    newProduct.classList.add("product", "flex", "justified", "marg-bot");
        /*Creamos el div del nombre y lo insertamos */
        var divName = document.createElement('div');
        divName.classList.add("product-name", "width-L");
            var spanName = document.createTextNode(newName);
            divName.appendChild(spanName);
        newProduct.appendChild(divName);
        /*Creamos el div del precio y lo insertamos */
        var divPrice = document.createElement('div');
        divPrice.classList.add("width-S");
            var dollar = document.createTextNode("$");
            divPrice.appendChild(dollar);
            var spanPrice = document.createElement('span');
            spanPrice.classList.add("product-cost");
            var nodePrice = document.createTextNode(newPrice);
            spanPrice.appendChild(nodePrice);
            divPrice.appendChild(spanPrice);
        newProduct.appendChild(divPrice);
        /*Creamos el div de la cantidad y lo insertamos */
        var divQty = document.createElement('div');
        divQty.classList.add("product-units", "width-S");
            var labelQty = document.createElement('label');
            labelQty.appendChild(document.createTextNode("QTY"));
            divQty.appendChild(labelQty);
            var inputQty = document.createElement("input");
            inputQty.setAttribute("class", "units width-F");
            inputQty.setAttribute('type', 'number');
            inputQty.setAttribute('min', '0');
            inputQty.setAttribute('value', '0');
            divQty.appendChild(inputQty);
        newProduct.appendChild(divQty);
        /*Creamos el div del producto-total y lo insertamos */
        var divSubTotal = document.createElement('div');
        divSubTotal.classList.add("width-S");
            var dollar2 = document.createTextNode("$");
            divSubTotal.appendChild(dollar2);
            var spanTotal = document.createElement('span');
            spanTotal.classList.add("product-total");
            var nodeTotal = document.createTextNode("0");
            spanTotal.appendChild(nodeTotal);
            divSubTotal.appendChild(spanTotal);
        newProduct.appendChild(divSubTotal);
        /*Creamos el div DEL BOTÓN y lo insertamos */
        var divBtn = document.createElement('div');
            var btnDelete = document.createElement('button');
            btnDelete.appendChild(document.createTextNode('Delete'));
            btnDelete.classList.add("btn", "btn-delete");
            divBtn.appendChild(btnDelete);
        newProduct.appendChild(divBtn);
        btnDelete.onclick = deleteItem;
    
    document.getElementById("product-list").appendChild(newProduct);
  }
  else{
    alert("Enter a valid name and price for the new product!!");
  }
}
