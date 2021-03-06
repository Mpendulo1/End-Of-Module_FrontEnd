var create = document.getElementById("create-vehicle");
let vehicles = []
let cart = []
console.log(cart)
fetch("https://obscure-sea-63906.herokuapp.com/view-vehicles")
.then((res) => res.json())
.then((data) => {
console.log(data);
dealership(data);
vehicles = data;
dealership(vehicles);
});

function dealership(vehicles) {
let vehicleContainer = document.querySelector(".vehicle-container");
vehicleContainer.innerHTML = "";
vehicles.data.forEach((car) => {
vehicleContainer.innerHTML += `

<div class = "vehicle">
<div class="card">
<div class="box-image">
<div class="circle">
<p id="car-id" class="vehicle-id">${car[0]}</p>
</div>
<img src="${car[8]}" class="vehicle-image size1">
</div>
<div class="box-content text-center">
<h4 class="vehicle-name"> ${car[1]}</h4>
<p class="vehicle-brand">Brand:  ${car[2]}</p>
<p class="vehicle-price">Price: R${car[4]} </p>
<p class="vehicle-type">Type: ${car[3]}</p>
<p class="vehicle-year">Year: ${car[5]}</p>
<button class="btn btn-primary shot-item-button purchase text-bold" type="button" onclick="addToCart(${car[0]})" >PURCHASE</button>

</div>
  
</div>

</div>

`;
});

//* Add to cart functions*//
}

function renderCart(cartItemContainer) {
let cartContainer = document.querySelector(".cart-container");
cartContainer.innerHTML = "";
if (cartItemContainer.length > 0) {
cartItemContainer.map((cartItem) => {
cartContainer.innerHTML += `
<div class = "vehicle">
<div class="card">
<div class="box-image">
<div class="circle">
<p id="car-id" class="vehicle-id">${cartItem[0]}</p>
</div>
<img src="${cartItem[8]}" class="vehicle-image size1">
</div>
<div class="box-content text-center">
<h4 class="vehicle-name"> ${cartItem[1]}</h4>
<p class="vehicle-brand">Brand:  ${cartItem[2]}</p>
<p class="vehicle-price">Price: R${cartItem[4]} </p>
<p class="vehicle-type">Type: ${cartItem[3]}</p>
<p class="vehicle-year">Year: ${cartItem[5]}</p>
<button onclick="removeVehicle(${cartItem[0]})" class="btn remove-btn purchase text-bold">Remove</button>
</div>
  
</div>

</div>

`;
});
let totalVehiclePrice = cartItemContainer.reduce(
(total, item) => total + parseInt(item[4]),
0
);
console.log(totalVehiclePrice);
cartContainer.innerHTML += `<h5>Total: R ${totalVehiclePrice}</h5>`;
} else {
cartContainer.innerHTML = "<h2>No items on cart</h2>";
}
}
// Remove Items From Cart

function removeVehicle(id) {
let product = vehicles.data.find((item) => {
return item[0] == id;
});
cart.splice(
cart.findIndex((a) => a.id === product.id),
1
);
renderCart(cart);
localStorage.setItem('cart', JSON.stringify(cart))
}

function addToCart(id) {
let vehicle = vehicles.data.find((item) => {
return item[0] == id;
});

console.log(vehicle);
cart.push(vehicle);
console.log(cart);
localStorage.setItem('cart', JSON.stringify(cart))
renderCart(cart);
}

//  ------------------------------       --------------------------------

function searchVehicles() {
let searchTerm = document.querySelector("#searchTerm").value;
console.log(searchTerm);
let foundVehicles = vehicles.data.filter((vehicles) =>
vehicles[2].toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(foundVehicles);
let vehicleContainer = document.querySelector(".vehicle-container");
vehicleContainer.innerHTML = "";
foundVehicles.forEach((car) => {
console.log(car);
vehicleContainer.innerHTML += `

<div class = "vehicle">
<div class="card">
<div class="box-image">
<div class="circle">
<p id="car-id" class="vehicle-id">${car[0]}</p>
</div>
<img src="${car[8]}" class="vehicle-image size1">
</div>
<div class="box-content text-center">
<h4 class="vehicle-name"> ${car[1]}</h4>
<p class="vehicle-brand">Brand:  ${car[2]}</p>
<p class="vehicle-price">Price: R${car[4]} </p>
<p class="vehicle-type">Type: ${car[3]}</p>
<p class="vehicle-year">Year: ${car[5]}</p>
<button class="btn btn-primary shot-item-button purchase text-bold" type="button" onclick="addToCart(${car[0]})" >PURCHASE</button>        
</div>
  
</div>

</div>

`;
});
}
// --------------------------------------------
function deleteProduct(carId) {
let vehicleId = vehicles.data.find((item) => {
return item[0] == carId;
});
let vehicle_id = vehicles.data[0];
console.log(vehicleId);

fetch("https://vast-escarpment-76787.herokuapp.com/delete-car", {
method: "POST",
body: JSON.stringify({
id: vehicleId,
}),
headers: {
"Content-type": "application/json",
},
})
.then((response) => response.json())
.then((data) => {
console.log(data);
if (
data["Notification"] ==
"The Vehicle Has Been Removed From The Dealership."
) {
alert("Deleted succesfully");
} else {
alert("We could Not Remove The Vehicle");
}
});
}
