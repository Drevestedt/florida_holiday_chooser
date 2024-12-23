// Display Holiday Package based on user input

// Collect user input 
const city = document.getElementById("city-choice");
const accomodation = document.getElementById("accomodation-choice");
const price = document.getElementById("price-choice");
const placesForCity = document.getElementById("places-choice");
const createButton = document.querySelector("#create-package");
const displayPackageSection = document.getElementById("display-package");

// Places to choose from based on city selection
const cityPlaces = {
  Miami: ["Miami Beach", "Little Havanna", "Art Deco Historic District", "Everglades National Park", "Bayside Market Place"],
  Orlando: ["Disney World", "Universal Studios", "Sea World", "Kennedy Space Center", "Ripley's Believe It or Not!"],
  Fort_Meyers_Beach: ["Sunset Dolphin Cruise", "Lovers Key State Park", "Sanibel Island"],
  Key_West: ["Sloppy Joes", "The Ernest Hemingway Home and Museum", "Key West Lighthouse"],
  Tampa: ["Bush Gardens", "The Florida Aquarium", "Ybor City"]
}

// Event listener for City selection 
city.addEventListener("change", placesDropdown);

// Function for populating Places to Visit dropdown
function placesDropdown() {
  const selectedCity = city.value;

  // Clear existing option in Places dropdown 
  placesForCity.innerHTML = `<option value="" disabled selected>Select a place</option>`;

  // Get places for the selected city 
  const availablePlaces = cityPlaces[selectedCity] || [];

  // Populate Places Dropdown with new options 
  availablePlaces.forEach(place => {
    const option = document.createElement("option");
    option.value = place;
    option.textContent = place;
    placesForCity.appendChild(option);
  });
}

// Event listener for the Create Package button 
createButton.addEventListener("click", displayPackage);

// Function to check if all form fields are filled in by the user 
function formFieldsFilled() {
  return city.value && accomodation.value && price.value && placesForCity.value;
}

// Function for displaying the holiday package 
function displayPackage(e) {
  e.preventDefault();

  // Check if all form fields are filled in
  if (!formFieldsFilled()) {
    alert("Please fill in all fields to create a package.");
    return;
  }

  // Collect user input values for the package display 
  const selectedCity = city.value || "Not selected";
  const selectedAccomodation = accomodation.value || "Not selected";
  const selectedPrice = price.value || "Not selected";
  const selectedPlacesForCity = placesForCity.value || "Not selected";

  // Elements to display package details 
  const packageCity = document.getElementById("package-city");
  const packageAccomodation = document.getElementById("package-accomodation");
  const packagePrice = document.getElementById("package-price");
  const packagePlaces = document.getElementById("package-places");

  // Display the holiday package based on collected values 
  packageCity.textContent = `City: ${selectedCity}`;
  packageAccomodation.textContent = `Accomodation: ${selectedAccomodation}`;
  packagePrice.textContent = `Price range: ${selectedPrice}`;
  packagePlaces.textContent = `Places to visit: ${selectedPlacesForCity}`;

  // Make the display package section visible 
  displayPackageSection.style.display = "block";

  // Scroll to display package section
  document.getElementById("display-package").scrollIntoView({ behavior: "smooth" });

}
