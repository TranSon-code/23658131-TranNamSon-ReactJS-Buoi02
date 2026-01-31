const renderCountry = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log('--- Part 2: Country Data ---');
      console.log(data[0]);
    })
    .catch(err => console.error(`${err.message} 💥`));
};