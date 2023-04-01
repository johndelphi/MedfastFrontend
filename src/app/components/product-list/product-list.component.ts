import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [CurrencyPipe],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private apiService: ApiService,
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchTerm = params['search'];
      if (searchTerm) {
        this.searchProducts(searchTerm);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.apiService.getProducts().subscribe((response: any[]) => {
      this.products = response;
    });
  }

  getFormattedPrice(price: number): string {
    if (price !== null) {
      return this.currencyPipe.transform(price, 'USD', 'symbol', '1.0-0') || '';
    } else {
      return '-';
    }
  }

  viewDetails(productId: string) {
    this.router.navigate(['/product-details', productId]);
  }

  searchProducts(searchTerm: string) {
    this.apiService.searchProducts(searchTerm).subscribe((response: any[]) => {
      this.products = response;
    });
  }
}
