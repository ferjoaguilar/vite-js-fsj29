let userName = prompt("Please enter your name:");
console.log(userName);

let favoriteColor = prompt("Please enter your favorite color:");
console.log(favoriteColor);

localStorage.setItem('userName', userName)
localStorage.setItem('favoriteColor', favoriteColor);

let storedUserName = localStorage.getItem('userName');
let storedFavoriteColor = localStorage.getItem('favoriteColor');
console.log(`Stored Name: ${storedUserName}`);
console.log(`Stored Favorite Color: ${storedFavoriteColor}`);