const patients = [
  {
    resourceType: "Patient",
    id: 1,
    active: true,
    name: [
      {
        use: "official",
        family: "Tolkien",
        given: ["John", "Ronald", "Reuel"]
      },
      {
        use: "usual",
        given: ["J.R.R."]
      }
    ],
    gender: "male",
    birthDate: "1892-01-02",
    assignedProviderId: 1
  },
  {
    resourceType: "Patient",
    id: 2,
    active: true,
    name: [
      {
        use: "official",
        family: "Austen",
        given: ["Jane"]
      }
    ],
    gender: "female",
    birthDate: "1817-07-18",
    deceasedBoolean: false,
    assignedProviderId: 1
  },
  {
    resourceType: "Patient",
    id: 3,
    active: true,
    name: [
      {
        use: "official",
        family: "Rousseau",
        given: ["Jean-Jacques"]
      },
      {
        use: "usual",
        given: ["JJ"]
      }
    ],
    gender: "male",
    birthDate: "1712-06-28",
    assignedProviderId: 1
  }
];

module.exports = patients;
