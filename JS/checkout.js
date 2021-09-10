function checkOut(){
let firstname = document.getElementById('fname').value
let lastname = document.getElementById('lname').value
let email = document.getElementById('email').value
let address = document.getElementById('adr').value
let city = document.getElementById('city').value
let state = document.getElementById('state').value
let postal = document.getElementById('zip').value
    fetch('https://obscure-sea-63906.herokuapp.com/create-insurance-provider', {
        method: 'POST',
        body: JSON.stringify ({
            Name: firstname,
            Surname: lastname,
            Email: email,
            Address: address,
            Address: city,
            Address: state,
            Address: postal,
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
function paymentMethod() {
    let cardName = document.getElementById('cname').value
    let cardNum = document.getElementById('ccnum').value
    let expMonth = document.getElementById('expmonth').value
    let expYear = document.getElementById('expyear').value
    let CVV = document.getElementById('cvv').value
    fetch('https://obscure-sea-63906.herokuapp.com/create-sales', {
        method: 'POST',
        body: JSON.stringify ({
            cardName: cardName,
            cardNumber: cardNum,
            expMonth: expMonth,
            expYear: expYear,
            cvv: CVV,
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