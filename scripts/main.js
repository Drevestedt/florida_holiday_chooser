// Display Holiday Package based on user input
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("creator-form");

  // Prevent default form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  })

  // Collect user input 
  const city = document.getElementById("city-choice");
  const placesForCity = document.getElementById("places-choice");
  const accomodation = document.getElementById("accomodation-choice");
  const price = document.getElementById("price-choice");

  // Places to choose from based on city selection
  const cityPlaces = {
    Miami: ["Miami Beach", "Little Havanna", "Art Deco Historic District", "Everglades National Park", "Bayside Market Place"],
    Orlando: ["Disney World", "Universal Studios", "Sea World", "Kennedy Space Center", "Ripley's Believe It or Not!"],
    Fort_Meyers_Beach: ["Sunset Dolphin Cruise", "Lovers Key State Park", "Sanibel Island"],
    Key_West: ["Sloppy Joes", "The Ernest Hemingway Home and Museum", "Key West Lighthouse and Keeper's Quarters Museum"],
    Tampa: ["Bush Gardens", "The Florida Aquarium", "Ybor City"]
  }

  // Event listener for City selection 
  city.addEventListener("change", () => {
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
  });
});