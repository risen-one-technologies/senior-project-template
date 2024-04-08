import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
