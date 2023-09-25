//index.js


document.addEventListener('DOMContentLoaded', function() {
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
menu.style.left = '0';

// Hide recipe cards in the menu
var menuRecipeCards = document.querySelectorAll('.menu .recipe-card');
menuRecipeCards.forEach(function(card) {
 card.style.display = 'block';
});

// Hide recipe cards on the page
var pageRecipeCards = document.querySelectorAll('.container .recipe-card');
pageRecipeCards.forEach(function(card) {
 card.style.display = 'none';
});
});

var menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(function(item) {
item.addEventListener('click', function() {
 menuItems.forEach(function(item) {
     item.classList.remove('clicked');
 });
 this.classList.add('clicked');
});
});

document.addEventListener('click', function(event) {
if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
 menu.style.left = '-250px';
 menuItems.forEach(function(item) {
     item.classList.remove('clicked');
 });

 // Show recipe cards on the page
 var pageRecipeCards = document.querySelectorAll('.container .recipe-card');
 pageRecipeCards.forEach(function(card) {
     card.style.display = 'block';
 });
}
});
});

