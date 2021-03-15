import { Component } from '@angular/core';

import { cancerList } from './cancers-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cancerList: any = cancerList;
  cancerType: any;

  selectedCancer: any;
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

  setGenre(genre: string) {
    this.patientInfo.genre = genre;
  }

  selectCancer(event: any) {
    this.selectedCancer = this.cancerList[event.target.value].regime;
    console.log(this.selectedCancer);
  }

  getBsa(patienData: any) {
    let weight = Math.pow(patienData.weight, 0.425);
    let height = Math.pow(patienData.height, 0.725);
    let bsa = Math.round(0.007184 * weight * height * 10) / 10;
    this.bsaValue = bsa;
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
    return this.crClValue;
  }

  getCarboplatin(patienData: any) {
    if (this.crClValue > 125) {
      this.crClValue = 125;
    }
    this.carboplatinValue = patienData.auc * (this.crClValue + 25);
    return this.carboplatinValue;
  }

  getDose(event: any) {
    this.doseValue = this.selectedCancer[
      event.target.value
    ].doses.map((dose: any) => Math.round(dose * this.bsaValue));
  }

  getResults(patienData: any, event: any) {
    this.selectedDrugCarboplatin = this.selectedCancer[
      event.target.value
    ].carboplatin;
    this.getBsa(patienData);
    this.getCrCl(patienData);
    if (this.selectedDrugCarboplatin === true) {
      this.getCarboplatin(patienData);
      this.getDose(event);
    } else {
      this.getDose(event);
    }
  }
}
