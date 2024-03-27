import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) {}

  // Method to handle button click event
  onClick() {
    console.log("button clicked!");
  
    this.http.get('https://3v6l9ub5ge.execute-api.us-east-1.amazonaws.com/getForums')
      .subscribe(
        response => {
          // Log the received response data
          console.log('Response from GET request:', response);
  
          // Access and use the response data as needed
          //const forums = response; // Assuming the response is an array of forums
          //console.log('Number of forums:', forums.length);
        },
        error => {
          // Handle errors gracefully
          console.error('Error making GET request:', error);
        }
      );
  }

}