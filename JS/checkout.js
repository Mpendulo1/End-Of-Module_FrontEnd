function checkOut(){
    let firstName = document.getElementById('name').value
    let surName = document.getElementById('surname').value
    let phoneNumber = document.getElementById('phone').value
    let licencenumber = document.getElementById('licenceNumber').value
    let address = document.getElementById('address').value
    let streetName = document.getElementById('streetAddress').value
    let cityName = document.getElementById('cityAddress').value
    let postalName = document.getElementById('postalAddress').value
    let email = document.getElementById('email').value
    let typeOfvehicle = document.getElementById('TPVehicle').value
    let numberofvehicles = document.getElementById('NumberOfVehicles').value
    let RadiusOfSpeculation = document.getElementById('ROSpeculation').value

    fetch('https://obscure-sea-63906.herokuapp.com/create-insurance-provider', {
        method: 'POST',
        body: JSON.stringify ({
            Name: firstName,
            Surname: surName,
            Phone: phoneNumber,
            licence: licencenumber,
            Address: address,
            Address: streetName,
            Address: cityName,
            Address: postalName,
            Email: email,
            Type_of_vehicle: typeOfvehicle,
            Number_of_vehicle: numberofvehicles,
            Radius_of_speculation: RadiusOfSpeculation,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res) => res.json())
    .then(data => {
        window.location.replace('./index.html')
    })

}


// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "mpendulokhozamk2@gmail.com",
// 	Password : "LloydSibanda11",
// 	To : '<recipient’s email address>',
// 	From : "<sender’s email address>",
// 	Subject : "<email subject>",
// 	Body : "<email body>",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }