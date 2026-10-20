import { getWalkers } from "./database.js";
import { getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

const findWalkerCity = (walker, allCities) => {
  let walkerCity = null;

  for (const city of allCities) {
    if (city.id === walker.cityId) {
      walkerCity = city;
    }
  }
  return walkerCity;
};

document.addEventListener("click", (theClickEvent) => {
  const whatWasClickedOn = theClickEvent.target;

  if (whatWasClickedOn.dataset.type === "walker") {
    window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`);
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    const currentWalkerCity = findWalkerCity(walker, cities);

    walkerHTML += `<li data-id="${walker.id}"
        data-city="${currentWalkerCity.name}"
        data-type="walker"
        >${walker.name}
        </li>`;
  }
  walkerHTML += "</ul>";

  return walkerHTML;
};
