import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  onSearch(): void {
    // Implement your logic for searching products, e.g., navigate to the product list page with the search term
    this.router.navigate(['/product-list'], { queryParams: { search: this.searchTerm } });
  }

}
