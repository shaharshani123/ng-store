import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  public products: IProduct[] = [];

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
