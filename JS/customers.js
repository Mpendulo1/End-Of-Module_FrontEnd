fetch('https://obscure-sea-63906.herokuapp.com/customer-profile')
.then((res) => res.json())
.then(data => {
    console.log(data)
    let customerContainer = document.getElementById('myProfiles')
    customerContainer.innerHTML="";
    data.data.forEach(user => {
       customerContainer.innerHTML += `
       <div class="profile">
       <div class="users">
       <p class="user id">Id:${user[0]}</p>
       <p class="user name">Name:  ${user[1]}</p>
       <p class="user surname">Surname: ${user[2]}</p>
       <p class="user phone">Phone Number: ${user[3]}</p>        
       <p class="user username">Username: ${user[5]}</p>    
       <p class="user password">Password: ${user[4]}</p>    
       <p class="user email">Email: ${user[6]}</p>        
       
       </div>
       </div>` 
    });
})