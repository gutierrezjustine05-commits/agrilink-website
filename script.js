let products = [];

function addProduct() {
    let name = document.getElementById("product").value;
    let price = document.getElementById("price").value;

    products.push({name, price});

    displayProducts();
}

function displayProducts() {
    let output = "";
    products.forEach(p => {
        output += `<div class="card">
            <h3>${p.name}</h3>
            <p>₱${p.price}</p>
            <button onclick="order('${p.name}')">Order</button>
        </div>`;
    });

    document.getElementById("list").innerHTML = output;
}

function order(product) {
    alert("Order placed for " + product);
}