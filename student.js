const informations = [
  ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
  ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
  ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
  ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
  ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
  ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
  ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
  ["Hank", "2109876543", 17, "505 Aspen Circle, Riverdale"],
  ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
  ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
];

const isAgeMoreThan = function (limit) {
  return function (info) {
    return info.age > limit;
  };
};

const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

// console.log(informations.filter(isAgeMoreThan(20)));

const infoWithGuardian = [
  ["Aarav", "9876543210", 25, "123 MG Road, Mumbai", ["9123456780", "Suresh"]],
  ["Ananya", "8765432109", 35, "456 Brigade Road, Bengaluru", ["8223456781", "Lakshmi"]],
  ["Ishaan", "7654321098", 19, "789 Park Street, Kolkata", ["8323456782", "Ramesh"]],
  ["Meera", "6543210987", 42, "101 Connaught Place, Delhi", ["8423456783", "Sunita"]],
  ["Rohan", "5432109876", 28, "202 Marine Drive, Chennai", ["8523456784", "Arun"]],
  ["Priya", "4321098765", 31, "303 Sarjapur Road, Hyderabad", ["8623456785", "Geeta"]],
  ["Kavya", "3210987654", 18, "404 Carter Road, Pune", ["8723456786", "Rajesh"]],
  ["Aditya", "2109876543", 45, "505 Residency Road, Ahmedabad", ["8823456787", "Vimala"]],
  ["Naina", "1098765432", 23, "606 MG Road, Jaipur", ["8923456788", "Ashok"]],
  ["Veer", "0198765431", 37, "707 Lodhi Road, Chandigarh", ["9023456789", "Manju"]]
];

// console.log(infoWithGuardian.filter(invert(isAgeMoreThan(30))));

// using object

const getObject = function (info) {
  return { name: info[0], contactno: info[1], age: info[2], address: info[3] };
};

const getObject2 = function (info) {
  return { name: info[0], contactno: info[1], age: info[2], address: info[3], guardiancontactno: info[4][0], guardianname: info[4][1] };
};


// const objectList = informations.map(getObject);

// console.log(objectList.filter(isAgeMoreThan(20)));

console.log(infoWithGuardian.map(getObject).filter(invert(isAgeMoreThan(30))));

