const infoOfGuardian = [
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
  ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
  ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
];

const isAgeMoreThan20 = function (info) {
  const age = info[1];
  return age > 20;
};


const isGuardianNamePresent = function (target) {
  return function (list) {
    const name = target[0];
    return list.at(-1)[0] === name;
  };
};

const reducer = function (storer, info) {
  if (peopleWithAgeOlderThan20.some(isGuardianNamePresent(info))) {
    const name = info[0];
    const age = info[1];

    storer.push([name, age]);
  }

  return storer;

};

const peopleWithAgeOlderThan20 = infoOfGuardian.filter(isAgeMoreThan20);

peopleWithAgeOlderThan20.reduce(reducer, []);