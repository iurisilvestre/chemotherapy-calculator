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
  selectedDrug: any;

  bsaValue: number = 0;
  paclitaxel: number = 80;
  crClValue: number = 0;
  carboplatin: number = 0;
  doseValue: number = 0;

  patientInfo = {
    genre: '',
    age: Number,
    height: Number,
    weight: Number,
    creatinine: Number,
    auc: Number,
  };

  getBsa(obj: any) {
    let weight = Math.pow(obj.weight, 0.425);
    let height = Math.pow(obj.height, 0.725);
    let bsa = Math.round(0.007184 * weight * height * 10) / 10;
    this.bsaValue = bsa;
  }

  setGenre(genre: string) {
    this.patientInfo.genre = genre;
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
  }

  getPaclitaxel() {
    return `${Math.round(this.paclitaxel * this.bsaValue)} mg`;
  }

  getResults(patienData: any, regime: any) {
    console.log(patienData);
    this.getBsa(patienData);
    this.getCrCl(patienData);
  }

  selectCancer(event: any) {
    this.selectedCancer = this.cancerList[event.target.value].regime;
    console.log(this.selectedCancer);
  }
}
