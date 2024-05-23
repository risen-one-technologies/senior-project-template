import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    // Your login logic with Lambda function
    // Simulating success for demonstration purposes
    const loginSuccess = true;
    
    return new Observable<boolean>((observer) => {
      if (loginSuccess) {
        observer.next(true); // Notify subscribers that login was successful
        observer.complete(); // Complete the observable
      } else {
        observer.error('Login failed'); // Notify subscribers that login failed
      }
    });
  }
}