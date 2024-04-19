import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
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
import { ErrorStateMatcher, MatRippleModule } from '@angular/material/core';
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

import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs'


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
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  constructor (private router: Router ) {}
  ngOnInit(){}
  signIn() {
    this.router.navigate(['/login']);
  }
  /*
  constructor(private http: HttpClient) {}
  
  // Method to handle button click event
  onClick() {
    console.log("button clicked!");
  
    this.http.get('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/getForums')
      .subscribe(
        response => {
          // Log the received response data
          console.log('Response from GET request:', response);
          const forums = response; // Assuming the response is an array of forums
          // @ts-ignore
          console.log(response.total);
          
          let previousRequests = []
          // @ts-ignore
          for (let i = 0; i < forums.total; i++) {
            // @ts-ignore
            previousRequests.push({value:("request " + i + "-"+ (i+1)), viewValue:forums.items[i].certificationName})
          }

          //console.log(previousRequests)
          // Access and use the response data as needed
          //const forums = response; // Assuming the response is an array of forums
          //console.log('Number of forums:', forums.length);
        },
        error => {
          // Handle errors gracefully
          console.error('Error making GET request:', error);
        }
      );
      ////////
      const data = {
        "primary_key": "5",
        "certification_name": "Angular Post",
        "employee_name": "Jeremy"
      };
      
      const encodedData = btoa(JSON.stringify(data));
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
  }
  */

}