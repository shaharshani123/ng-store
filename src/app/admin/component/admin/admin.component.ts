import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public products: IProduct[] = [];
  @Input() dataSource?:IProduct;

  constructor(private productService: ProductService) {}

  ngOnInit(){
    this.productService.getProducts$().subscribe((data)=>{
      console.log("allproducts:",data);
      this.products = data;
    });
  }

  ngOnDestroy(): void {

  }
}
