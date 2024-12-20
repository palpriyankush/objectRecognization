const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"];

const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const getIndex = (country) => countries.indexOf(country);

const getCapital = function (country) {
  return capitals[getIndex(country)];
};

