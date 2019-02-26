const biomarkers = [
  {
    resourceType: "Observation",
    id: 1,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-01",
    valueQuantity: {
      value: 76.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 2,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-02",
    valueQuantity: {
      value: 156.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 3,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-03",
    valueQuantity: {
      value: 200.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 4,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-04",
    valueQuantity: {
      value: 85.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 5,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-06",
    valueQuantity: {
      value: 111.2,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 6,
    patientId: 2,
    status: "final",
    effectiveDateTime: "2019-02-01",
    valueQuantity: {
      value: 99.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 7,
    patientId: 2,
    status: "final",
    effectiveDateTime: "2019-02-02",
    valueQuantity: {
      value: 156.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 8,
    patientId: 2,
    status: "final",
    effectiveDateTime: "2019-02-03",
    valueQuantity: {
      value: 107.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 8,
    patientId: 2,
    status: "final",
    effectiveDateTime: "2019-02-04",
    valueQuantity: {
      value: 85.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 9,
    patientId: 2,
    status: "final",
    effectiveDateTime: "2019-02-06",
    valueQuantity: {
      value: 111.2,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 10,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-01",
    valueQuantity: {
      value: 112.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  },
  {
    resourceType: "Observation",
    id: 11,
    patientId: 1,
    status: "final",
    effectiveDateTime: "2019-02-06",
    valueQuantity: {
      value: 113.0,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org"
    },
    referenceRange: [
      {
        low: {
          value: 40.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 109.0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        meaning: {
          coding: [
            {
              system: "http://hl7.org/fhir/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ],
          text: "Normal Range"
        }
      }
    ]
  }
];

module.exports = biomarkers;
