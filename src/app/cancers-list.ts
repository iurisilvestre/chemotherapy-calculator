export const cancerList = [
  {
    type: 'Breast Cancer',
    regime: [
      { drug: 'Paclitaxel 80mg/m2', doses: [80] },
      {
        drug: 'Cyclophosphamide 600mg/m2 + Doxorubicin 60mg/m2',
        doses: [600, 60],
      },
      { drug: 'Carboplatin + Paclitaxel 80mg/m2', doses: [80] },
      { drug: 'Trastuzumab', doses: [8, 600] },
    ],
  },
  {
    type: 'Lung Cancer - NSCLC',
    regime: [
      { drug: 'Carboplatin + Paclitaxel 200mg/m2', doses: [200] },
      { drug: 'Carboplatin + Pemetrexed 500mg/m2', doses: [500] },
    ],
  },
  {
    type: 'Lung Cancer - SCLC',
    regime: [
      { drug: 'Caboplatin + Etoposide 100mg/m2', doses: [100] },
      { drug: 'Cisplatin 80mg/m2 + Etoposide 100mg/m2', doses: [80, 100] },
    ],
  },
  {
    type: 'Colorectal Cancer',
    regime: [
      { drug: 'mFOLFOX6', doses: [85, 400, 2400, 400] },
      { drug: 'FOLFIRI ', doses: [180, 400, 2400, 400] },
      { drug: 'Capecitabin ', doses: [1000] },
      { drug: 'Cetuximab ', doses: [500] },
    ],
  },
];
