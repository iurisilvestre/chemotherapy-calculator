import { Component, OnInit } from '@angular/core';
import { cancerList } from '../cancers-list';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    interval(500).subscribe(() => {
      this.allowSelectCancers();
    });
  }

  // Globals

  cancerList: any = cancerList;
  cancerType: any;

  selectCancersDisabled = true;
  selectedCancer: any;
  selectedDrug: any;
  selectedDrugCarboplatin: any;

  bsaValue: number = 0;
  crClValue: number = 0;
  carboplatinValue: number = 0;
  doseValue: any = [];

  setAucRequired: boolean = false;

  patientInfo = {
    genre: '',
    age: null,
    height: null,
    weight: null,
    creatinine: null,
    auc: null,
  };

  // Settings Functions and Dependencies

  selectCancer(event: any): void {
    this.selectedCancer = this.cancerList[event.value].regimen;
  }

  resetPatientInfo(): void {
    this.selectCancersDisabled = true;
    this.selectedCancer = null;
    this.patientInfo = {
      genre: '',
      age: null,
      height: null,
      weight: null,
      creatinine: null,
      auc: null,
    };

    this.doseValue = [];
    this.carboplatinValue = 0;
    this.selectedDrug = 0;
    this.selectedDrugCarboplatin = 0;
    this.setAucRequired = false;
  }

  allowSelectCancers(): void {
    if (
      this.crClValue > 0 &&
      this.bsaValue > 0 &&
      this.patientInfo.genre !== ''
    ) {
      this.selectCancersDisabled = false;
    } else {
      this.selectCancersDisabled = true;
    }
  }

  allowSelectRegimen() {
    if (this.selectedCancer != null) {
      return false;
    } else {
      return true;
    }
  }

  checkProperties(obj: any) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != '') {
        return true;
      }
    }
    return false;
  }

  copyResToClipboard(obj: any) {
    let str = '';
    if (this.selectedDrugCarboplatin === true) {
      str += 'Carboplatin: ' + this.carboplatinValue + ' mg;\n';
    }
    for (let i = 0; i < obj.length; i++) {
      str += obj[i].drug + obj[i].dose + ' mg;\n';
    }
    return str;
  }

  openSnackBar(snackBarMsg: string) {
    if (snackBarMsg != '') {
      this._snackBar.open(snackBarMsg, '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
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
    if (patienData.creatinine > 0) {
      let crClMale =
        ((140 - patienData.age) * patienData.weight) /
        (patienData.creatinine * 72);
      if (patienData.genre === 'female') {
        this.crClValue = Math.round((crClMale * 0.85 * 10) / 10);
      } else if (patienData.genre === 'male') {
        this.crClValue = Math.round(crClMale * 10) / 10;
      }
      if (isNaN(this.crClValue)) {
        this.crClValue = 0;
      }
      return this.crClValue;
    } else {
      return (this.crClValue = 0);
    }
  }

  getCarboplatin(patienData: any): void {
    if (this.selectedDrugCarboplatin === true && patienData.auc > 0) {
      if (this.crClValue > 125) {
        this.crClValue = 125;
      }
      this.carboplatinValue = patienData.auc * (this.crClValue + 25);
    } else {
      this.setAucRequired = true;
      this.carboplatinValue = 0;
    }
  }

  verifyCarboplatin(patienData: any) {
    if (this.selectedDrugCarboplatin === true && patienData.auc > 0) {
      this.setAucRequired = true;
    } else {
      this.setAucRequired = false;
    }
  }

  getDose(patienData: any): void {
    let i = this.selectedDrug;
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

  getResults(patienData: any, event: any): void {
    this.selectedDrug = event.value;
    this.selectedDrugCarboplatin = this.selectedCancer[
      event.value
    ].carboplatinCalc;
    this.getDose(patienData);
    this.getCarboplatin(patienData);
  }
}
