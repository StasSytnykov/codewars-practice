let users = [
  { name: "Іван", age: 20, surname: "Іванов" },
  { name: "Петро", age: 18, surname: "Петров" },
  { name: "Енн", age: 19, surname: "Гетевей" },
];

const byField = (fieldName) => {
  return (userA, userB) => {
    return userA[fieldName] > userB[fieldName] ? 1 : -1;
  };
};

console.log(users.sort(byField("age")));
