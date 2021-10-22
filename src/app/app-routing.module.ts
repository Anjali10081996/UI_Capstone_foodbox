import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateproductComponent } from './products/createproduct/createproduct.component';
import { ProductsComponent } from './products/products.component';
import { UpdateproductComponent } from './products/updateproduct/updateproduct.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'' , redirectTo : '/home', pathMatch : 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'signin' , component:SigninComponent},
  {path: 'logout' , component:LogoutComponent},
  {path: 'navbar' , component:NavbarComponent},
  {path: 'products' , component:ProductsComponent},
  {path : 'products/create' , component:CreateproductComponent},
  {path : 'products/update' , component:UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
