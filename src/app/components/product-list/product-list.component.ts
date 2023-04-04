import { Component, Input } from '@angular/core';
import { Medicine } from 'src/app/models/Medicine.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  private _MedicineListResult: Medicine[] = [];

  @Input()
   
  set MedicineListResult(value: Medicine[]) {
    this._MedicineListResult = value;
    console.log('Medicine List Result:', this._MedicineListResult);
  }

  get MedicineListResult(): Medicine[] {
    return this._MedicineListResult;
  }


  toggleDiscountInfo(event: Event) {
    const button = event.target as HTMLButtonElement;
    const discountInfo = button.nextElementSibling as HTMLDivElement;
    discountInfo.classList.toggle('hidden');
  }
}
