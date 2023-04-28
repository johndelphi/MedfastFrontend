import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Medicine } from 'src/app/models/medicine.model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm! : string;
  filteredMedicines! : Medicine[];
  @Output() resultsEmitter = new EventEmitter<Medicine[]>();

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.apiService.searchProducts(this.searchTerm).subscribe((medicines: Medicine[]) => {
      this.filteredMedicines = medicines;
       console.log('Search Results:', this.filteredMedicines); 
      this.resultsEmitter.emit(this.filteredMedicines);
    });
  }
}
