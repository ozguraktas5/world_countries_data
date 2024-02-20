document.addEventListener("DOMContentLoaded", function () {
  const populationBtn = document.querySelector(".population");
  const languagesBtn = document.querySelector(".languages");
  const container = document.querySelector(".container");

  // İlk açıldığında nüfusa göre ülkelerin listesi gösterilsin
  container.innerHTML = "10 Most populated countries in the world";
  const sortedCountries = countries_data.sort(
    (a, b) => b.population - a.population
  );
  const top10 = sortedCountries.slice(0, 10);
  container.innerHTML += "<br>";
  top10.forEach((country) => {
    const divItem = document.createElement("div");
    divItem.textContent = `${country.name} - ${country.population}`;
    container.appendChild(divItem);
  });

  populationBtn.addEventListener("click", function () {
    container.innerHTML = "10 Most populated countries in the world";
    const sortedCountries = countries_data.sort(
      (a, b) => b.population - a.population
    );
    const top10 = sortedCountries.slice(0, 10);
    container.innerHTML += "<br>";
    top10.forEach((country) => {
      const divItem = document.createElement("div");
      divItem.textContent = `${country.name} - ${country.population}`;
      container.appendChild(divItem);
    });
  });

  languagesBtn.addEventListener("click", function () {
    container.innerHTML = "10 Most Spoken languages in the world";

    // Tüm dilleri depolamak için bir sözlük oluştur
    const languagesCount = {};

    // Her bir ülkenin dillerini say
    countries_data.forEach((country) => {
      country.languages.forEach((language) => {
        if (languagesCount[language]) {
          languagesCount[language]++;
        } else {
          languagesCount[language] = 1;
        }
      });
    });

    // Dil sayısına göre sırala
    const sortedLanguages = Object.keys(languagesCount).sort(
      (a, b) => languagesCount[b] - languagesCount[a]
    );

    // En yaygın 10 dili listele
    const top10Languages = sortedLanguages.slice(0, 10);
    container.innerHTML += "<br>";

    top10Languages.forEach((language) => {
      const divItem = document.createElement("div");
      divItem.textContent = `${language} - ${languagesCount[language]}`;
      container.appendChild(divItem);
    });
  });
});
