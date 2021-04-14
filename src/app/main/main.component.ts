import { Component, OnInit } from '@angular/core';
import { cancerList } from '../cancers-list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Patient } from '../patient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  // Globals

  cancerList: any = cancerList;

  selectCancersDisabled = true;
  selectedCancer: any;
  selectedDrug: any;
  selectedDrugCarboplatin: any;

  bsaValue: number = 0;
  crClValue: number = 0;
  carboplatinValue: number = 0;
  doseValue: any = [];

  cancerSelected = '';
  regimenSelected = '';

  setAucRequired: boolean = false;

  patientInfo: Patient = {
    genre: '',
    age: 0,
    height: 0,
    weight: 0,
    creatinine: 0,
    auc: 0,
  };

  // Settings Functions and Dependencies

  selectCancer(event: any): void {
    this.selectedCancer = this.cancerList[event.value].regimen;
    this.regimenSelected = '';
  }

  resetData(): void {
    this.cancerSelected = '';
    this.selectCancersDisabled = true;
    this.selectedCancer = null;
    this.doseValue = [];
    this.carboplatinValue = 0;
    this.selectedDrug = null;
    this.selectedDrugCarboplatin = null;
    this.setAucRequired = false;
    this.patientInfo = {
      genre: '',
      age: 0,
      height: 0,
      weight: 0,
      creatinine: 0,
      auc: 0,
    };
  }

  allowSelectCancers(): void {
    if (this.checkProperties(this.patientInfo)) {
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
    if (
      obj.genre != '' &&
      obj.age > 0 &&
      obj.height > 0 &&
      obj.weight > 0 &&
      obj.creatinine > 0
    ) {
      return true;
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
  getBsa(patientData: any) {
    let weight = Math.pow(patientData.weight, 0.425);
    let height = Math.pow(patientData.height, 0.725);
    this.bsaValue = Math.round(0.007184 * weight * height * 10) / 10;
    if (isNaN(this.bsaValue)) {
      this.bsaValue = 0;
    }
    return this.bsaValue;
  }

  getCrCl(patientData: any) {
    if (patientData.creatinine > 0) {
      let crClMale =
        ((140 - patientData.age) * patientData.weight) /
        (patientData.creatinine * 72);
      if (patientData.genre === 'female') {
        this.crClValue = Math.round((crClMale * 0.85 * 10) / 10);
      } else if (patientData.genre === 'male') {
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

  getCarboplatin(patientData: any): void {
    let crCl = this.getCrCl(patientData);
    if (this.selectedDrugCarboplatin === true && patientData.auc > 0) {
      if (crCl > 125) {
        crCl = 125;
      }
      this.carboplatinValue = Math.round(patientData.auc * (crCl + 25));
    } else if (this.selectedDrugCarboplatin === true) {
      this.setAucRequired = true;
    } else {
      this.carboplatinValue = 0;
    }
  }

  getDose(patientData: any): void {
    if (this.checkProperties(this.patientInfo)) {
      this.doseValue = [];
      if (this.selectedDrug > -1) {
        let i = this.selectedDrug;
        let obj = this.selectedCancer[i].drugDoses;
        let calc;
        if (this.selectedCancer[i].bsaCalc === true) {
          calc = this.getBsa(patientData);
        } else {
          calc = patientData.weight;
        }
        for (let i = 0; i < obj.length; i++) {
          this.doseValue.push({
            drug: obj[i].drug,
            dose: Math.round(obj[i].dose * calc),
          });
        }
      }
    }
  }

  getResults(): void {
    this.allowSelectCancers();
    this.getDose(this.patientInfo);
    this.getCarboplatin(this.patientInfo);
  }

  setSelectedDrug(event: any): void {
    this.selectedDrug = event.value;
    this.selectedDrugCarboplatin = this.selectedCancer[
      event.value
    ].carboplatinCalc;
    this.getResults();
  }
}
