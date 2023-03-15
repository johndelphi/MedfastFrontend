import { Component } from '@angular/core';
import { MedicineService } from './Service/medicine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedfastFrontend';

  constructor(private MedicineService :MedicineService){

  }

  ngOnIint():void{
    this.getAllproducts();
    
  }

  getAllproducts(){
    this.MedicineService.getAllproducts()
    .subscribe(
    response =>{
      console.log(response);
    }
    )
}
}