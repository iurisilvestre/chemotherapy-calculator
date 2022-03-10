export const CoursesSchemes = {
  "Breast Cancer": [
    {
      id: "BC001",
      scheme: "Paclitaxel 80mg/m²",
      drugDoses: [
        {
          drug: "Paclitaxel",
          dose: 80,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "BC002",
      scheme: "Cyclophosphamide 600mg/m² + Doxorubicin 60mg/m²",
      drugDoses: [
        {
          drug: "Cyclophosphamide: ",
          dose: 600,
        },
        {
          drug: "Doxorubicin",
          dose: 60,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "BC003",
      scheme: "Carboplatin + Paclitaxel 80mg/m²",
      drugDoses: [
        {
          drug: "Paclitaxel",
          dose: 80,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "BC004",
      scheme: "Trastuzumab",
      drugDoses: [
        {
          drug: "Loading Dose",
          dose: 8,
        },
        {
          drug: "Subsequent Dose",
          dose: 6,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: false,
    },
  ],
  "Lung Cancer - NSCLC": [
    {
      id: "LC001",
      scheme: "Carboplatin + Paclitaxel 200mg/m²",
      drugDoses: [
        {
          drug: "Paclitaxel",
          dose: 200,
        },
      ],
      carboplatinCalc: true,
      bsaCalc: true,
    },
    {
      id: "LC002",
      scheme: "Carboplatin + Pemetrexed 500mg/m²",
      drugDoses: [
        {
          drug: "Pemetrexed",
          dose: 500,
        },
      ],
      carboplatinCalc: true,
      bsaCalc: true,
    },
  ],
  "Lung Cancer - SCLC": [
    {
      id: "LC003",
      scheme: "Caboplatin + Etoposide 100mg/m²",
      drugDoses: [
        {
          drug: "Etoposide",
          dose: 100,
        },
      ],
      carboplatinCalc: true,
      bsaCalc: true,
    },
    {
      id: "BC004",
      scheme: "Cisplatin 80mg/m² + Etoposide 100mg/m²",
      drugDoses: [
        {
          drug: "Cisplatin",
          dose: 80,
        },
        {
          drug: "Etoposide",
          dose: 100,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
  ],
  "Colorectal Cancer": [
    {
      id: "CC001",
      scheme: "mFOLFOX6",
      drugDoses: [
        {
          drug: "Oxaliplatin",
          dose: 85,
        },
        {
          drug: "5FU Bolus",
          dose: 400,
        },
        {
          drug: "5FU Continuous Infusion 46h",
          dose: 2400,
        },
        {
          drug: "Folonic Acid",
          dose: 400,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "CC002",
      scheme: "FOLFIRI",
      drugDoses: [
        {
          drug: "Irinotecan",
          dose: 180,
        },
        {
          drug: "5FU Bolus",
          dose: 400,
        },
        {
          drug: "5FU Continuous Infusion 46h",
          dose: 2400,
        },
        {
          drug: "Folonic Acid",
          dose: 400,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "CC003",
      scheme: "Capecitabin 1000mg/m²",
      drugDoses: [
        {
          drug: "Capecitabin",
          dose: 1000,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
    {
      id: "CC004",
      scheme: "Cetuximab 500mg/m²",
      drugDoses: [
        {
          drug: "Cetuximab",
          dose: 500,
        },
      ],
      carboplatinCalc: false,
      bsaCalc: true,
    },
  ],
};
