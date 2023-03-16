import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/component/admin/admin.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProductComponent } from './product/componenets/product/product.component';


const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"admin",component:AdminComponent,pathMatch:'full'},
  {path:"prod",component:ProductComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
