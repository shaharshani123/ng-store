import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/component/admin/admin.component';
import { EditProductComponent } from './admin/component/edit-product/edit-product.component';
import { HomeComponent } from './home/components/home/home.component';
import { ProductComponent } from './product/componenets/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';


const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"admin",component:AdminComponent},
  {path:"prod",component:ProductComponent},
  {path:"admin/edit/:id",component:EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
