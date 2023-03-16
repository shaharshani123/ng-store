import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './component/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
  ],

})
export class AdminModule { }
