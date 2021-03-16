export const cancerList = [
  {
    type: 'Breast Cancer',
    regime: [
      {
        drugOption: 'Paclitaxel 80mg/m²',
        drugDoses: [{ drug: 'Paclitaxel: ', dose: 80 }],
        carboplatinCalc: false,
        bsaCalc: true,
      },
      {
        drugOption: 'Cyclophosphamide 600mg/m² + Doxorubicin 60mg/m²',
        drugDoses: [
          { drug: 'Cyclophosphamide: ', dose: 600 },
          { drug: 'Doxorubicin: ', dose: 60 },
        ],
        carboplatin: false,
        bsaCalc: true,
      },
      {
        drugOption: 'Carboplatin + Paclitaxel 80mg/m²',
        drugDoses: [{ drug: 'Paclitaxel: ', dose: 80 }],
        carboplatinCalc: true,
        bsaCalc: true,
      },
      {
        drugOption: 'Trastuzumab',
        drugDoses: [
          { drug: 'Loading Dose: ', dose: 8 },
          { drug: 'Subsequent Dose : ', dose: 6 },
        ],
        carboplatinCalc: false,
        bsaCalc: false,
      },
    ],
  },
  {
    type: 'Lung Cancer - NSCLC',
    regime: [
      {
        drugOption: 'Carboplatin + Paclitaxel 200mg/m²',
        drugDoses: [{ drug: 'Paclitaxel: ', dose: 200 }],
        carboplatin: true,
        bsaCalc: true,
      },
      {
        drugOption: 'Carboplatin + Pemetrexed 500mg/m²',
        drugDoses: [{ drug: 'Pemetrexed: ', dose: 500 }],
        carboplatin: true,
        bsaCalc: true,
      },
    ],
  },
  {
    type: 'Lung Cancer - SCLC',
    regime: [
      {
        drugOption: 'Caboplatin + Etoposide 100mg/m²',
        drugDoses: [{ drug: 'Etoposide: ', dose: 100 }],
        carboplatin: true,
      },
      {
        drugOption: 'Cisplatin 80mg/m² + Etoposide 100mg/m²',
        drugDoses: [
          { drug: 'Cisplatin: ', dose: 80 },
          { drug: 'Etoposide: ', dose: 100 },
        ],
        carboplatin: false,
        bsaCalc: true,
      },
    ],
  },
  {
    type: 'Colorectal Cancer',
    regime: [
      {
        drugOption: 'mFOLFOX6',
        drugDoses: [
          { drug: 'Oxaliplatin: ', dose: 85 },
          { drug: '5FU (Bolus Dose): ', dose: 400 },
          { drug: 'Continuous Infusion: 46h Dose: ', dose: 2400 },
          { drug: 'Folonic Acid: ', dose: 400 },
        ],
        carboplatin: false,
        bsaCalc: true,
      },
      {
        drugOption: 'FOLFIRI ',
        drugDoses: [
          { drug: 'Irinotecan: ', dose: 180 },
          { drug: '5FU (Bolus Dose): ', dose: 400 },
          { drug: 'Continuous Infusion: 46h Dose: ', dose: 2400 },
          { drug: 'Folonic Acid: ', dose: 400 },
        ],
        carboplatin: false,
        bsaCalc: true,
      },
      {
        drugOption: 'Capecitabin ',
        drugDoses: [{ drug: 'Capecitabin: ', dose: 1000 }],
        carboplatin: false,
        bsaCalc: true,
      },
      {
        drugOption: 'Cetuximab ',
        drugDoses: [{ drug: 'Cetuximab: ', dose: 500 }],
        carboplatin: false,
        bsaCalc: true,
      },
    ],
  },
];
