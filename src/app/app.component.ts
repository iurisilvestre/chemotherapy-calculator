import { Component } from '@angular/core';

import { cancerList } from './cancers-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cancerList: any = cancerList;
  cancers = Object.keys(cancerList);
  cancerType: any;

  bsaValue: number = 0;
  paclitaxel: number = 80;
  crCl: number = 0;

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
    return `${bsa} m2`;
  }

  setGenre(genre: string) {
    this.patientInfo.genre = genre;
  }

  getCrCl(obj: any) {
    let crClMale = ((140 - obj.age) * obj.weight) / (obj.creatinine * 72);
    if (obj.genre === 'female') {
      return `${Math.round((crClMale * 0.85 * 10) / 10)} mL/min`;
    } else if (obj.genre === 'male') {
      return `${Math.round(crClMale * 10) / 10} mL/min`;
    } else {
      return 'NaN mL/min';
    }
  }

  getPaclitaxel() {
    return `${Math.round(this.paclitaxel * this.bsaValue)} mg`;
  }

  selectCancer(event: any) {
    console.log(event.target);
  }
}
