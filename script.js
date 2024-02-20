document.addEventListener("DOMContentLoaded", function () {
  const populationBtn = document.querySelector(".population");
  const languagesBtn = document.querySelector(".languages");
  const container = document.querySelector(".container");

  populationBtn.addEventListener("click", function () {
    container.innerHTML = "";

    const sortedCountries = countries_data.sort(
      (a, b) => b.population - a.population
    );
    const top10 = sortedCountries.slice(0, 10);

    top10.forEach((country) => {
      const divItem = document.createElement("div");
      divItem.textContent = `${country.name} - ${country.population}`;
      container.appendChild(divItem);
    });
    
  });
});
