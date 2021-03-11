import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bsaValue = 0;
  paclitaxel = 80;

  patientInfo = {
    genre: String,
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

  getPaclitaxel() {
    return `${Math.round(this.paclitaxel * this.bsaValue)} mg`;
  }
}
