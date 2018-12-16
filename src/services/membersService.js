import faker from "faker";

export function getMembers() {
  const members = [];
  for (let i = 0; i < 100000; i++) {
    members.push({
      _id: i,
      firstname: faker.name.firstName(),
      name: faker.name.lastName(),
      status: "Active"
    });
  }
  return members;
}
