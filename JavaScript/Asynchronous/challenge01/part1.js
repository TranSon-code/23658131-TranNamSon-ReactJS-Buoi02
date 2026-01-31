const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log('--- Part 1: Location ---');
      console.log(`You are in ${data.city}, ${data.country}`);

      // Gọi hàm của Part 2
      renderCountry(data.country);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

// Chạy thử
whereAmI(52.508, 13.381);