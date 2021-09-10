function myFunction() {
let fname = document.getElementById('fname').value
let lname = document.getElementById('lname').value
let contact = document.getElementById('contact-input').value
let password = document.getElementById('password').value
let username = document.getElementById('username').value
let email = document.getElementById('email-input').value
fetch("https://obscure-sea-63906.herokuapp.com/customer-registration", {
method: 'POST', 
body: JSON.stringify ({
firstname: fname,
lastname: lname,
contact: contact,
password: password,
username: username,
email: email,
}),
headers: {
"Content-type": "application/json",
}})
.then((res) => res.json())
.then(data => {
window.location.replace('./login.html')
}) 
}

function loginFunction() {
let username = document.getElementById('username').value
let password = document.getElementById('password').value
fetch("https://obscure-sea-63906.herokuapp.com/user-login/", {
method: 'PATCH', 
body: JSON.stringify ({
username: username,
password: password,
}),
headers: {
"Content-Type": "application/json",

},}) 
.then((res) => res.json())
.then(res => {
  if (!res.data){
    alert('Invalid Username or Password')
  }
  else{
    window.location.replace('./Shop.html')
  }
});
}