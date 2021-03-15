export const cancerList = [
  {
    type: 'Breast Cancer',
    regime: [
      { drug: 'Paclitaxel 80mg/m²', doses: [80], carboplatin: false },
      {
        drug: 'Cyclophosphamide 600mg/m² + Doxorubicin 60mg/m²',
        doses: [600, 60],
        carboplatin: false,
      },
      {
        drug: 'Carboplatin + Paclitaxel 80mg/m²',
        doses: [80],
        carboplatin: true,
      },
      { drug: 'Trastuzumab', doses: [8, 600], carboplatin: false },
    ],
  },
  {
    type: 'Lung Cancer - NSCLC',
    regime: [
      {
        drug: 'Carboplatin + Paclitaxel 200mg/m²',
        doses: [200],
        carboplatin: true,
      },
      {
        drug: 'Carboplatin + Pemetrexed 500mg/m²',
        doses: [500],
        carboplatin: true,
      },
    ],
  },
  {
    type: 'Lung Cancer - SCLC',
    regime: [
      {
        drug: 'Caboplatin + Etoposide 100mg/m²',
        doses: [100],
        carboplatin: true,
      },
      {
        drug: 'Cisplatin 80mg/m² + Etoposide 100mg/m²',
        doses: [80, 100],
        carboplatin: false,
      },
    ],
  },
  {
    type: 'Colorectal Cancer',
    regime: [
      { drug: 'mFOLFOX6', doses: [85, 400, 2400, 400], carboplatin: false },
      { drug: 'FOLFIRI ', doses: [180, 400, 2400, 400], carboplatin: false },
      { drug: 'Capecitabin ', doses: [1000], carboplatin: false },
      { drug: 'Cetuximab ', doses: [500], carboplatin: false },
    ],
  },
];
