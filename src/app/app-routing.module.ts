import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
