import { Component } from '@angular/core';
import { Medicine } from './models/Medicine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedfastFrontend';
  filteredMedicines: Medicine[] = [];

  ngOnInit(): void {
    // Add logic to retrieve initial data here, if needed
  }
}
