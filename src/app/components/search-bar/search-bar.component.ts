import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApiService,Medicine } from '../../api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm! : string;
  searchResults! : Medicine[];
  @Output() resultsEmitter = new EventEmitter<Medicine[]>();

  constructor(private  apiservice:ApiService) { }

  ngOnInit(): void {
  }


  search(): void {
    this.apiservice.searchProducts(this.searchTerm).subscribe((medicines: Medicine[]) => {
      this.searchResults = medicines;
      console.log('Search Results:', this.searchResults); 
      this.resultsEmitter.emit(this.searchResults);
    });
  }
}
