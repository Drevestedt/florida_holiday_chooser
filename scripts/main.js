// Getting user input and displaying package
document.addEventListener("DOMContentLoaded", () => {
  const creatorForm = document.getElementById("creator-form");
  const displayPackage = document.getElementById("display-package");
  const packageCity = document.getElementById("package-city");
  const packageAccomodation = document.getElementById("package-accomodation");
  const packagePrice = document.getElementById("package-price");
  const packagePlaces = document.getElementById("package-places");

  // Prevent form from reloading the page
  creatorForm.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  // Get user input values 
  const city = document.getElementById("city");
  const accomodation = document.getElementById("accomodation");
  const priceRange = document.getElementById("price-range");

})