

function addVehicle() {
    fetch('https://obscure-sea-63906.herokuapp.com/create-vehicles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            brand: document.getElementById('brand').value,
            type: document.getElementById('type').value,
            price: document.getElementById('price').value,
            year: document.getElementById('year').value,
            description: document.getElementById('description').value,
            transition: document.getElementById('transition').value,
            image: document.getElementById('image_url').value

        }),
        mode: 'cors'
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("Vehicle created successfully")
  
        if (data['message'] == "Player Profile Added Successfully") {
            alert('You have sucessfully Added A Profile! Please View It On The add player profile Page')
            window.location.replace('./Shop.html')
        } else {
            alert('Form filled in incorrectly')
        }
    })
  }

// Delete Function

function deleteProduct() {
    const VHC_id = document.getElementById('delete-car').value
    console.log(VHC_id); 
    fetch(`https://obscure-sea-63906.herokuapp.com/delete-vehicle/${VHC_id}`, {

        method: 'PUT',
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You Successfully deleted the product')
        alert('You Successfully Added A Vehicle')
        window.location.replace('./Shop.html')
    })
}



// Update Function
function updateProducts() {
    const productID = document.getElementById('Product_ID').value;
    const name = document.getElementById('name').value;
    const brand = document.getElementById('brand').value;
    const type = document.getElementById('type').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
    const transtion = document.getElementById('transition');
    const image = document.getElementById('image_url').value;

    fetch(`https://obscure-sea-63906.herokuapp.com/edit-vehicle/${productID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            brand: brand,
            type: type,
            year: year,
            description: description,
            transtion: transtion,
            image: image
        }),
        mode: "cors",
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You have successfully changed a product")

        if (data['message'] == "Updated Products") {
            alert('You have successfully updated a product! Please see products page!')
            window.location.replace('./Shop.html')
        }
    })
}
