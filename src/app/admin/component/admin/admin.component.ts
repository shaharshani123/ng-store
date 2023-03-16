import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],

})
export class AdminComponent implements AfterViewInit{
  public dataSource: MatTableDataSource<IProduct> = new MatTableDataSource;
 // @Input() dataSource?:IProduct[];
  public displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private productService: ProductService) {

  }

  ngOnInit(){
    this.productService.getProducts$().subscribe((data)=>{
      this.initTable(data);
    });

  }

  ngOnDestroy(): void {

  }
  ngAfterViewInit() {
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }

  removeFromData(product :IProduct){
    console.log("removeFromData func");
    const index = this.dataSource.data.findIndex((el) => {
      return el.id = product.id;
    })
    this.dataSource.data.splice(index,1);
    this.dataSource._updateChangeSubscription();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private initFilterandPaganig():void{

  }

  private initTable(data:IProduct[]):void{
    console.log("allproducts:",data);
    this.displayedColumns=['id', 'title', 'price', 'description','image','menu'];
    this.dataSource =new MatTableDataSource(data);
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }



}
