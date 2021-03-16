import { Component } from '@angular/core';

import { cancerList } from './cancers-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Globals
  cancerList: any = cancerList;
  cancerType: any;

  selectedCancer: any;
  selectedDrug: any;
  selectedDrugCarboplatin: any;

  bsaValue: number = 0;
  crClValue: number = 0;
  carboplatinValue: number = 0;
  doseValue: any = [];

  patientInfo = {
    genre: '',
    age: Number,
    height: Number,
    weight: Number,
    creatinine: Number,
    auc: Number,
  };

  // Settings Functions and Dependencies
  setGenre(genre: string) {
    this.patientInfo.genre = genre;
  }

  selectCancer(event: any) {
    this.selectedCancer = this.cancerList[event.target.value].regime;
  }

  resetPatientInfo() {
    this.selectedCancer = {};
    this.patientInfo = {
      genre: '',
      age: Number,
      height: Number,
      weight: Number,
      creatinine: Number,
      auc: Number,
    };
  }

  allowSelectCancers(patienData: any) {
    if (this.crClValue != 0 && this.bsaValue != null) {
      return false;
    } else {
      return true;
    }
  }

  allowSelectRegime() {
    if (this.selectedCancer != null) {
      return false;
    } else {
      return true;
    }
  }

  // Calc Functions
  getBsa(patienData: any) {
    let weight = Math.pow(patienData.weight, 0.425);
    let height = Math.pow(patienData.height, 0.725);
    this.bsaValue = Math.round(0.007184 * weight * height * 10) / 10;
    if (isNaN(this.bsaValue)) {
      this.bsaValue = 0;
    }
    return this.bsaValue;
  }

  getCrCl(patienData: any) {
    let crClMale =
      ((140 - patienData.age) * patienData.weight) /
      (patienData.creatinine * 72);
    if (patienData.genre === 'female') {
      this.crClValue = Math.round((crClMale * 0.85 * 10) / 10);
    } else if (patienData.genre === 'male') {
      this.crClValue = Math.round(crClMale * 10) / 10;
    } else {
      this.crClValue = 0;
    }
    if (isNaN(this.crClValue)) {
      this.crClValue = 0;
    }
    return this.crClValue;
  }

  getCarboplatin(patienData: any) {
    if (this.crClValue > 125) {
      this.crClValue = 125;
    }
    this.carboplatinValue = patienData.auc * (this.crClValue + 25);
    if (isNaN(this.carboplatinValue)) {
      this.carboplatinValue = 0;
    }
    return this.carboplatinValue;
  }

  getDose(event: any, patienData: any) {
    let i = event.target.value;
    let obj = this.selectedCancer[i].drugDoses;
    this.doseValue = [];
    let calc;
    if (this.selectedCancer[i].bsaCalc === true) {
      calc = this.bsaValue;
    } else {
      calc = patienData.weight;
    }
    for (let i = 0; i < obj.length; i++) {
      this.doseValue.push({
        drug: obj[i].drug,
        dose: obj[i].dose * calc,
      });
    }
  }

  getResults(patienData: any, event: any) {
    this.selectedDrug = event;
    this.selectedDrugCarboplatin = this.selectedCancer[
      event.target.value
    ].carboplatinCalc;
    this.getBsa(patienData);
    this.getCrCl(patienData);
    if (this.selectedDrugCarboplatin === true) {
      this.getCarboplatin(patienData);
      this.getDose(event, patienData);
    } else {
      this.getDose(event, patienData);
    }
  }
}
