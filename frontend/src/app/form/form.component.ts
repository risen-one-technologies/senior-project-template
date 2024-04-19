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

import { HttpClient} from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


interface previousRequest {
  value: string;
  viewValue: string;
  items: any;
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
  rocRequest = false;
  personalDev = false;
  data = new SendData();
  constructor(private http: HttpClient) {}

  trackByFn(index: number, item: any): string | number {
    // Implement your tracking logic here
    // This example uses the item's ID (assuming it exists)
    return item.id;
  }
  getForums() {
    // @ts-ignore
    let previousRequests = []
    this.http.get('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/getForums')
      .subscribe(
        response => {
          console.log('Response from GET request:', response);
          const forums = response; // Assuming the response is an array of forums
                    
          // @ts-ignore
          for (let i = 0; i < forums.total; i++) {
            // @ts-ignore
            previousRequests.push({value:("request " + i + "-"+ (i+1)), viewValue:forums.items[i].certificationName, items:forums.items[i]})
          }
          //console.log('Number of forums:', forums.length);
        }
      );
      // @ts-ignore
      return previousRequests
  }
  // @ts-ignore
  updateForms(item){
    console.log(item);
    (<HTMLInputElement>document.getElementById("username")).value = item.employee_name;
    (<HTMLInputElement>document.getElementById("certName")).value = item.certificationName;
    (<HTMLInputElement>document.getElementById("certReason")).value = item.reason;
    (<HTMLInputElement>document.getElementById("certTimeComplete")).value = item.estimated_completion_time;
    (<HTMLInputElement>document.getElementById("rocReq")).checked = item.ROC_request;
    (<HTMLInputElement>document.getElementById("persDev")).checked = item.personal_development;
    if(item.ROC_request == undefined){
      (<HTMLInputElement>document.getElementById("rocReq")).checked = false;
    }
    if(item.personal_development){
      
    }
    (<HTMLInputElement>document.getElementById("certTrainingDate")).value = item.estimated_completion_date;
    (<HTMLInputElement>document.getElementById("certExpiration")).value = item.expiration;
    (<HTMLInputElement>document.getElementById("cost")).value = item.cost;
    (<HTMLInputElement>document.getElementById("prevCert")).value = item.prior_certification_name;
    (<HTMLInputElement>document.getElementById("prevCertDate")).value =item.prior_certification_date;
    

    /*
            primary_key: body.primary_key,
            employee_name: body.employee_name,
            certification_name: body.certification_name,
            ROC_request: body.ROC_request, //true/false
            personal_development: body.personal_development, //true/false
            reason: body.reason, 
            estimated_completion_date: body.estimated_completion_date,
            expiration: body.expiration,
            cost: body.cost,
            prior_certification_name: body.prior_certification_name,
            prior_certification_date: body.prior_certification_date,
            employee_sign_off_date: body.employee_sign_off_date,
            lead_sign_off_date: body.lead_sign_off_date,
            executive_sign_off_date: body.executive_sign_off_date
     */

  }

  previousRequests: previousRequest[] = this.getForums()
  
  /*previousRequests: previousRequest[] = [
    {value: 'request 1-0', viewValue: 'Request 1'},
    {value: 'request 2-1', viewValue: 'Request 2'},
    {value: 'request 3-2', viewValue: 'Request 3'},
  ];*/

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

    /* 
    //current error with this involving header mismatch-- uncomment & test once we have headers we are 
    //sending matched up with the headers in the lambda

    const jsonData = this.data.getData()
    const encodedData = btoa(JSON.stringify(jsonData));
      this.http.post<any>('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/createForum',
      encodedData)
      .subscribe(
        response => {
          console.log('POST request successful:', response);
        },
        error => {
          console.error('Error making POST request:', error);
        }
      );
      */
  }
  generatePdf() {
    const myusername = (<HTMLInputElement>document.getElementById("username")).value;
    const certName = (<HTMLInputElement>document.getElementById("certName")).value;
    const isRocChecked = (<HTMLInputElement>document.getElementById("rocReq")).checked;
    const isPersDev = (<HTMLInputElement>document.getElementById("persDev")).checked;
    const certReason = (<HTMLInputElement>document.getElementById("certReason")).value;
    const certTimeComplete = (<HTMLInputElement>document.getElementById("certTimeComplete")).value;
    const certTrainingDate = (<HTMLInputElement>document.getElementById("certTrainingDate")).value;
    const certExpiration = (<HTMLInputElement>document.getElementById("certExpiration")).value;
    const cost = (<HTMLInputElement>document.getElementById("cost")).value;
    const prevCert = (<HTMLInputElement>document.getElementById("prevCert")).value;
    const prevCertDate = (<HTMLInputElement>document.getElementById("prevCertDate")).value;
    const employeeSign = (<HTMLInputElement>document.getElementById("employeeSign")).value;
    const leadSign = (<HTMLInputElement>document.getElementById("leadSign")).value;
    const execSign = (<HTMLInputElement>document.getElementById("execSign")).value;



    function checkRoc() {
      if(isRocChecked)
        return 'Yes';
      else
        return 'No'
    };
    function checkPersDev() {
      if(isPersDev)
        return 'Yes';
      else
        return 'No'
    };


    const documentDefinition = {
      content: [
        {
          table: {
            body: [
              ['Employee Name: ', myusername],
              ['Name of Certification:', certName],
              ['Did ROC request that I complete this training?', checkRoc()],
              ['Are you completing this certificate for Personal Development?', checkPersDev()],
              ['Reason for Certification:', certReason],
              ['Estimated Time of Completion:', certTimeComplete],
              ['Estimated Certification/Training Date: ', certTrainingDate],
              ['Certification Expiration: ', certExpiration],
              ['Certification Cost: ', cost],
              ['Name of Previous Certification/Training: ', prevCert],
              ['Date of Previous Certification Training: ', prevCertDate],
              ['Employee Sign Off Date: ', employeeSign],
              ['Lead Sign Off Date: ', leadSign],
              ['Executive Sign off Date: ', execSign]
            ]
          }
        },
      ],  
    };
    pdfMake.createPdf(documentDefinition).download('ReimbursementFor' +certName + '.pdf');
  }
}


export class MyComponent {
  rocRequest = false;
  personalDev = false;

  rocReq() {
    this.rocRequest = !this.rocRequest; // Toggle state on click
  }

  persDev() {
    this.personalDev = !this.personalDev; // Toggle state on click
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
  public getData(){
    return this
  }
  public sendData(){
    //console.log("Email: "+this.email +" Username: "+this.username);
    console.log(this)
    /*const encodedData = btoa(JSON.stringify(this));
      this.http.post<any>('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/createForum',
      encodedData)
      .subscribe(
        response => {
          console.log('POST request successful:', response);
        },
        error => {
          console.error('Error making POST request:', error);
        }
      );
  }*/
}
}
