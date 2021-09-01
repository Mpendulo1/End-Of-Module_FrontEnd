let vehicle = [];
let cart = [];
var modal = document.getElementById('id01');
console.log(cart);
fetch("https://obscure-sea-63906.herokuapp.com/view-vehicles")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    dealership(data);
    vehicle = data;
    dealership(vehicle);
  });

function dealership(vehicle) {
  let vehicleContainer = document.querySelector(".vehicle-container");
  vehicleContainer.innerHTML = "";
  vehicle.data.forEach((car) => {
    vehicleContainer.innerHTML += `
    
    <div class = "vehicle">
    <div class="card">
    <div class="box-image">
    <div class="circle">
      <p id="car-id" class="vehicle-id">id ${car[0]}</p>
      </div>
        <img src="${car[8]}"class="image size1">
        </div>
        <div class="box-content text-center">
        <h4 class="vehicle-name">${car[1]} </h4>
        <p class="vehicle-brand">Brand:${car[2]} </p>
        <p class="vehicle-price">Price: ${car[4]} </p>
        <p class="vehicle-type">Type: ${car[3] }</p>
        <p class="vehicle-year">Year: ${car[5]} </p>
        <button class="btn btn-primary shot-item-button purchase text-bold" type="button" onclick="addToCart(${car[0]})" >PURCHASE</button>
        <button class="btn btn-primary shot-item-button purchase text-bold" type="button" onclick="readMore(${car[6]})" >read more</button>
        
        </div>
            
    </div>
    
    </div>
    `;
  });


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
        <button onclick="removeItem()" class="remove-btn purchase text-bold">Remove</button>
        </div>
            
    </div>
    
    </div>
    `;
    });
    let totalVehiclePrice = cartItemContainer.reduce(
      (total, item) => total + parseInt(item.price),
      0
    );
    console.log(totalVehiclePrice);
    cartContainer.innerHTML += `<h5>Total: R ${totalVehiclePrice}</h5>`;
  } else {
    cartContainer.innerHTML = "<h2>No items on cart</h2>";
  }
}
function removeItem(id) {
  vehicles1 = veihcles.data
  removeItem(data)
  removeItem(vehicles1)
  let product = vehicles1.data.find((item) => {
    return item.id == id;
  });
  console.log(product);

  cart.splice(
    cart.findIndex((a) => a.id === product.id),
    1
  );
  renderCart(cart);
  removeItem(product);
}

function addToCart(id) {
  let vehicle_car = vehicle.data.find((item) => {
    return item[0] == id;
  });
  console.log(vehicle_car);
  cart.push(vehicle_car);
  console.log(cart);
  renderCart(cart);
}
//  ------------------------------       --------------------------------

function searchVehicles() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);
  let foundVehicles = vehicle.data.filter((vehicle) =>
    vehicle[2].toLowerCase().includes(searchTerm.toLowerCase())
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
  let vehicleId = vehicle.data.find((item) => {
    return item.id == carId;
  });
  let vehicle_id = vehicle.data[0];
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