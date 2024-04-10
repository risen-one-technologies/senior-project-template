import {Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';

interface previousRequest {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  data = new SendData();
  previousRequests: previousRequest[] = [
    {value: 'request 1-0', viewValue: 'Request 1'},
    {value: 'request 2-1', viewValue: 'Request 2'},
    {value: 'request 3-2', viewValue: 'Request 3'},
  ];

  rocReq(){
    this.data.updateROC()
  }
  persDev(){
    this.data.updatePersDev()
  }
  submit(){
    const myusername = (<HTMLInputElement>document.getElementById("username")).value;
    this.data.updateName(myusername);
    const param = (<HTMLInputElement>document.getElementById("certName")).value;
    this.data.updateCertName(param);
    const param1 = (<HTMLInputElement>document.getElementById("certReason")).value;
    this.data.updateCertReason(param1);
    const param2 = (<HTMLInputElement>document.getElementById("certTimeComplete")).value;
    this.data.updateCertTimeComplete(param2);
    const param3 = (<HTMLInputElement>document.getElementById("certTrainingDate")).value;
    this.data.updateCertTrainingDate(param3);
    const param4 = (<HTMLInputElement>document.getElementById("certExpiration")).value;
    this.data.updateCertExpiration(param4);
    const param5 = (<HTMLInputElement>document.getElementById("cost")).value;
    this.data.updateCost(param5);
    const param6 = (<HTMLInputElement>document.getElementById("prevCert")).value;
    this.data.updateNameOfPrevCert(param6);
    const param7 = (<HTMLInputElement>document.getElementById("prevCertDate")).value;
    this.data.updateDateOfPrevCert(param7);

    this.data.sendData();
  }
}

export class SendData{
  //Don't forget to add view previous requests
  name: string;
  certName: string;
  ROCrequest: boolean;
  PersDev: boolean;
  certReason: string;
  certTimeComplete: any;
  certTrainingDate: any;
  certExpiration: any;
  cost: any;
  nameOfPrevCert: string;
  dateOfPrevCert: any;
  //Employee and Lead Sign off 


  constructor(){
    this.name = "";
    this.certName = "";
    this.certReason = "";
    this.ROCrequest = false;
    this.PersDev = false;
    this.cost = 0;
    this.nameOfPrevCert = "";
    this.dateOfPrevCert = Date.now;
    this.certTimeComplete = Date.now;
    this.certTrainingDate = Date.now;
    this.certExpiration = Date.now;
  }
  public updateName(param: string) {
    this.name = param;
  }
  public updateCertName(param: string){
    this.certName = param;
  }
  public updateCertReason(param: string){
    this.certReason = param;
  }
  public updateROC(){
    if(this.ROCrequest)
      this.ROCrequest = false;
    else  
      this.ROCrequest = true;
  }
  public updatePersDev(){
    if(this.PersDev)
      this.PersDev = false;
    else  
      this.PersDev = true;
  }
  public updateCost(param: any){
    this.cost = param;
  }
  public updateNameOfPrevCert(param: string){
    this.nameOfPrevCert = param;
  }
  public updateDateOfPrevCert(param: any){
    this.dateOfPrevCert = param;
  }
  public updateCertTimeComplete(param: any){
    this.certTimeComplete = param;
  }
  public updateCertTrainingDate(param: any){
    this.certTrainingDate = param;
  }
  public updateCertExpiration(param: any){
    this.certExpiration = param;
  }
  public sendData(){
    //console.log("Email: "+this.email +" Username: "+this.username);
    console.log(this)
    // const encodedData = btoa(JSON.stringify(data));
    //   this.http.post<any>('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/createForum',
    //   encodedData)
    //   .subscribe(
    //     response => {
    //       console.log('POST request successful:', response);
    //     },
    //     error => {
    //       console.error('Error making POST request:', error);
    //     }
    //   );
  }
}
