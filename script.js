document.addEventListener("DOMContentLoaded", function () {
  const populationBtn = document.querySelector(".population");
  const languagesBtn = document.querySelector(".languages");
  const container = document.querySelector(".container");

  populationBtn.addEventListener("click", function () {
    container.innerHTML = "";

    const sortedCountries = countries_data.sort(
      (a, b) => b.population - a.population
    );
    const top10Countries = sortedCountries.slice(0, 10);

    top10Countries.forEach((country) => {
      const divItem = document.createElement("div");
      divItem.textContent = `${country.name} - ${country.population}`;
      container.appendChild(divItem);
    });
  });

  languagesBtn.addEventListener("click", function () {
    container.innerHTML = "";

    const languagesCount = {};

    countries_data.forEach((country) => {
      country.languages.forEach((language) => {
        if (languagesCount[language]) {
          languagesCount[language]++;
        } else {
          languagesCount[language] = 1;
        }
      });
    });

    const sortedLanguages = Object.keys(languagesCount).sort((a, b) => languagesCount[b] - languagesCount[a]);

    const top10Languages = sortedLanguages.slice(0, 10);

    top10Languages.forEach((language) => {
        const divItem = document.createElement("div");
        divItem.textContent = `${language} - ${languagesCount[language]}`;
        container.appendChild(divItem);
    })
  });
});
