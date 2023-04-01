import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  retailers = [
    { name: 'Retailer 1', price: '$20.00', discountCode: 'ABC123', discountAmount: '$2.00' },
    { name: 'Retailer 2', price: '$18.50', discountCode: '', discountAmount: '' },
    { name: 'Retailer 3', price: '$21.99', discountCode: 'DEF456', discountAmount: '$3.00' },
    { name: 'Retailer 4', price: '$22.50', discountCode: '', discountAmount: '' }
  ];
}
