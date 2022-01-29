export const CoursesSchemes = [
  {
    type: "Breast Cancer",
    regimens: [
      {
        courseScheme: "Paclitaxel 80mg/m²",
        drugDoses: [{ drug: "Paclitaxel: ", dose: 80 }],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        courseScheme: "Cyclophosphamide 600mg/m² + Doxorubicin 60mg/m²",
        drugDoses: [
          { drug: "Cyclophosphamide: ", dose: 600 },
          { drug: "Doxorubicin: ", dose: 60 },
        ],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        courseScheme: "Carboplatin + Paclitaxel 80mg/m²",
        drugDoses: [{ drug: "Paclitaxel: ", dose: 80 }],
        carboplatinCalc: true,
        bsaCalc: true,
      },
      {
        courseScheme: "Trastuzumab",
        drugDoses: [
          { drug: "Loading Dose: ", dose: 8 },
          { drug: "Subsequent Dose : ", dose: 6 },
        ],
        carboplatinCalc: false,
        bsaCalc: false,
      },
    ],
  },
  {
    type: "Lung Cancer - NSCLC",
    regimens: [
      {
        courseScheme: "Carboplatin + Paclitaxel 200mg/m²",
        drugDoses: [{ drug: "Paclitaxel: ", dose: 200 }],
        carboplatinCalc: true,
        bsaCalc: true,
      },
      {
        courseScheme: "Carboplatin + Pemetrexed 500mg/m²",
        drugDoses: [{ drug: "Pemetrexed: ", dose: 500 }],
        carboplatinCalc: true,
        bsaCalc: true,
      },
    ],
  },
  {
    type: "Lung Cancer - SCLC",
    regimens: [
      {
        courseScheme: "Caboplatin + Etoposide 100mg/m²",
        drugDoses: [{ drug: "Etoposide: ", dose: 100 }],
        carboplatinCalc: true,
        bsaCalc: true,
      },
      {
        courseScheme: "Cisplatin 80mg/m² + Etoposide 100mg/m²",
        drugDoses: [
          { drug: "Cisplatin: ", dose: 80 },
          { drug: "Etoposide: ", dose: 100 },
        ],
        carboplatinCalc: false,
        bsaCalc: true,
      },
    ],
  },
  {
    type: "Colorectal Cancer",
    regimens: [
      {
        courseScheme: "mFOLFOX6",
        drugDoses: [
          { drug: "Oxaliplatin: ", dose: 85 },
          { drug: "5FU Bolus: ", dose: 400 },
          { drug: "5FU Continuous Infusion 46h: ", dose: 2400 },
          { drug: "Folonic Acid: ", dose: 400 },
        ],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        courseScheme: "FOLFIRI ",
        drugDoses: [
          { drug: "Irinotecan: ", dose: 180 },
          { drug: "5FU Bolus: ", dose: 400 },
          { drug: "5FU Continuous Infusion 46h: ", dose: 2400 },
          { drug: "Folonic Acid: ", dose: 400 },
        ],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        courseScheme: "Capecitabin 1000mg/m²",
        drugDoses: [{ drug: "Capecitabin: ", dose: 1000 }],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        courseScheme: "Cetuximab 500mg/m²",
        drugDoses: [{ drug: "Cetuximab: ", dose: 500 }],
        carboplatinCalc: false,
        bsaCalc: true,
      },
    ],
  },
];
