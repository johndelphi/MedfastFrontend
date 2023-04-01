import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  searchTerm = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router // Add the Router here
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.apiService.getProduct(productId).subscribe((response: any) => {
        this.product = response;
      });
    } else {
      console.error('Product ID is not provided');
      // Handle the case when the product ID is not provided, e.g., navigate to the product list page
    }
  }

  addToCart(product: any) {
    // Implement your logic for adding the product to the cart
    console.log('Add to cart:', product);
  }

  onSearch() {
    // Implement your logic for searching products, e.g., navigate to the product list page with the search term
    this.router.navigate(['/product-list'], { queryParams: { search: this.searchTerm } });
  }
}
