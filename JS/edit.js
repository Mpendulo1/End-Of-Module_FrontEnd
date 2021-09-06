

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
            transition: document.getElementById('transtion').value,
            image: document.getElementById('image_url').value

        }),
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You added a product successfully")

        if (data['message'] == "Product Added Successfully") {
            alert('You have sucessfully Added A Product! Please View It On The Products Page')
        } else {
            alert('Form filled in incorrectly')
        }
    })
}




// Delete Function

function deleteProduct() {
    const productID = document.getElementById('id').value;
    console.log(productID)

    if (typeof(productID) === "string") {
        return alert('Please Use Correct Values for Each Section')
    }

    fetch('https://obscure-sea-63906.herokuapp.com/delete-vehicle/' + `${ int(productID) }`, {
        method: 'GET',
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You Successfully deleted the product')

        if (data['message'] == 'Product Deleted Successfully') {
            alert('You successfully deleted the product! Please see confirmation on products page!')
            window.location.href = '/Shop.html'
        } else {
            alert('Error in form! Please revisit')
        }
    })
}
// Add Function
function updateProducts() {
    const productID = document.getElementById('Product_ID').value;
    const name = document.getElementById('name').value;
    const brand = document.getElementById('brand').value;
    const type = document.getElementById('type').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;
    const transtion = document.getElementById('transition');
    const image = document.querySelector('.image_url').value;

    fetch('https://obscure-sea-63906.herokuapp.com/edit-vehicle/' + `${ productID }`, {
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
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You have successfully changed a product")

        if (data['message'] == "Updated Products") {
            alert('You have successfully updated a product! Please see products page!')
            window.location.href = './Shop.html'
        }
    })
}
