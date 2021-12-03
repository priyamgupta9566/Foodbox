import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { FooditemComponent } from './component/fooditem/fooditem.component';
import { SigninComponent } from './component/signin/signin.component';
import { SuccessComponent } from './component/success/success.component';

const routes: Routes = [
  {path:'', redirectTo:'fooditem',pathMatch:'full'},
  {path:'fooditem', component:FooditemComponent},
  {path:'cart', component:CartComponent},
  {path:'admin', component:AdminComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'signin', component:SigninComponent},
  {path:'success', component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
