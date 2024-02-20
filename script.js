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
    divItem.className = "country-item";

    // Ülke adını içeren div
    const nameDiv = document.createElement("div");
    nameDiv.textContent = country.name;
    nameDiv.className = "country-name";
    divItem.appendChild(nameDiv);

    // Barı içeren div
    const barDiv = document.createElement("div");
    barDiv.className = "bar-container";
    const bar = document.createElement("div");
    bar.style.background = `linear-gradient(to right, orange ${
      (country.population / top10[0].population) * 100
    }%, transparent 0)`;
    bar.className = "bar";
    barDiv.appendChild(bar);
    divItem.appendChild(barDiv);

    // Nüfusu içeren div
    const populationDiv = document.createElement("div");
    populationDiv.textContent = country.population;
    populationDiv.className = "country-population";
    divItem.appendChild(populationDiv);

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
      divItem.className = "country-item";

      // Ülke adını içeren div
      const nameDiv = document.createElement("div");
      nameDiv.textContent = country.name;
      nameDiv.className = "country-name";
      divItem.appendChild(nameDiv);

      // Barı içeren div
      const barDiv = document.createElement("div");
      barDiv.className = "bar-container";
      const bar = document.createElement("div");
      bar.style.background = `linear-gradient(to right, orange ${
        (country.population / top10[0].population) * 100
      }%, transparent 0)`;
      bar.className = "bar";
      barDiv.appendChild(bar);
      divItem.appendChild(barDiv);

      // Nüfusu içeren div
      const populationDiv = document.createElement("div");
      populationDiv.textContent = country.population;
      populationDiv.className = "country-population";
      divItem.appendChild(populationDiv);

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

      // Dil adını içeren div
      const languageDiv = document.createElement("div");
      languageDiv.textContent = language;
      divItem.appendChild(languageDiv);

      // Dil sayısını içeren div
      const countDiv = document.createElement("div");
      countDiv.textContent = languagesCount[language];
      divItem.appendChild(countDiv);

      // Barı oluştur
      const bar = document.createElement("div");
      bar.style.background = `linear-gradient(to right, orange ${
        (languagesCount[language] / languagesCount[top10Languages[0]]) * 100
      }%, transparent 0)`;
      bar.style.height = "10px";
      bar.style.marginTop = "5px";
      divItem.appendChild(bar);

      container.appendChild(divItem);
    });
  });
});
